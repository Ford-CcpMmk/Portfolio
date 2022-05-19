import { Request, Response, NextFunction } from 'express';
import SolrNode from 'solr-node';
import service from '../services/service';

const config = require('../../config');

class ControllerClass {
    public static getBrowseBookByPage = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { tripitakaId, page, startMorality, subbook } = req.body;
            const client = new SolrNode(config.tribuddhaTH);
            const clientallbook = new SolrNode(config.bookInformation);
            const allbook = clientallbook.query().q(`{!child of="*:* -_nest_path_:*"}version:ฉบับหลวง`).rows(100).addParams([{field:"fq", value:"display_name:*"}]).fl("*,[child limit=100]")
            const allbookResult = JSON.parse(JSON.stringify(await clientallbook.search(allbook))).response.docs
            let currentBookInfo;
            for(const category of allbookResult) {
                currentBookInfo = category.book.find((book: any)=> book.id == tripitakaId);
                if(currentBookInfo) {
                    break;
                }
            }
            const bookQuery = client.query().q({tripitaka_id: parseInt(tripitakaId)}).rows(config.defaultListBrowsePage).sort({subbook_id : "asc", morality_num: "asc"})
            let p: number;
            let lastPage: number;

            if(page) {
                p = page
            } else {
                p = Math.ceil(startMorality/config.defaultListBrowsePage)
            }
            if(currentBookInfo && currentBookInfo.max_number && currentBookInfo.max_number[0]) {
                lastPage = Math.ceil(currentBookInfo.max_number[0] / config.defaultListBrowsePage)
            } else if(currentBookInfo && currentBookInfo.sub_book) {
                lastPage = 0
                for(const sub of currentBookInfo.sub_book) {
                    if(subbook && subbook == sub.id) {
                        p = Math.ceil((lastPage + parseInt(startMorality)) / config.defaultListBrowsePage)
                    }
                    lastPage += sub.max_number[0]
                }
                lastPage = Math.ceil(lastPage / config.defaultListBrowsePage)
            } else {
                lastPage = 0
            }
            bookQuery.start((p - 1) * config.defaultListBrowsePage);
            const result = await client.search(bookQuery);
            return res.status(200).json({
                page: p,
                lastPage,
                data: result.response,
                bookInfo: currentBookInfo
            });
        } catch(error) {
            console.log('error :',error);
            return res.status(500).json({
                message: error
            })
        }
    }
    
    public static getSearchBookByFilterPage = async (req:Request, res: Response, next: NextFunction) => {
        try {
            const { page, filter } = req.body;
            const client = new SolrNode(config.tribuddhaTH);
            let bookQuery = client.query().rows(config.defaultListSearchPage).start((page - 1) * config.defaultListSearchPage).qop("AND").fl("*,score").facetQuery(`facet=true&facet.field=category`).hlQuery(`hl=true&hl.fl=text&hl.simple.pre=<span style="color: red">&hl.simple.post=</span>&hl.fragsize=300`);
            await service.setFilter(bookQuery, filter);
            const result = JSON.parse(JSON.stringify(await client.search(bookQuery)));
            return res.status(200).json({
                lastPage: Math.ceil(result.response.numFound / config.defaultListSearchPage),
                defaultNumber: config.defaultListSearchPage,
                data: result.response,
                facet: result.facet_counts.facet_fields.category,
                highlighting: result.highlighting,
                header: result.responseHeader
            });
        } catch (error) {
            return res.status(500).json({
                message: error
            })
        }
    }

    public static getSearchBookTextByFilterPage = async (req:Request, res: Response, next: NextFunction) => {
        try {
            const { startIndex, filter } = req.body;
            const client = new SolrNode(config.tribuddhaTH);
            const bookQuery = client.query().rows(1).start(startIndex).qop("AND").fl("*,score");
            await service.setFilter(bookQuery, filter);
            const resultRaw = await client.search(bookQuery);
            const resultJson = JSON.parse(JSON.stringify(resultRaw.response.docs[0])); 
            // const page = Math.ceil(resultJson.morality_num[0] / config.defaultListBrowsePage)
            let queryJson: {[key: string]: any} = {tripitaka_id: resultJson.tripitaka_id[0]}
            const lastRecordQuery = client.query().q({tripitaka_id: resultJson.tripitaka_id[0]}).sort({morality_num: "desc"}).start(0).rows(1);
            const lastRecordRaw = await client.search(lastRecordQuery);
            const lastRecord = JSON.parse(JSON.stringify(lastRecordRaw.response.docs[0]));
            const currentBook = client.query().qop("AND").sort({morality_num: "asc"});   
            if (resultJson.morality_num[0] === 1) {
                queryJson["morality_num"] = `(${resultJson.morality_num[0]} OR ${resultJson.morality_num[0] + 1} OR ${resultJson.morality_num[0] + 2})`;
            } else if (resultJson.morality_num[0] === lastRecord.morality_num[0]) {
                queryJson["morality_num"] = `(${resultJson.morality_num[0]} OR ${resultJson.morality_num[0] - 1} OR ${resultJson.morality_num[0] - 2})`;
            } else {
                queryJson["morality_num"] = `(${resultJson.morality_num[0]} OR ${resultJson.morality_num[0] - 1} OR ${resultJson.morality_num[0] + 1})`;
            }
            if(resultJson.subbook_id && resultJson.subbook_id[0]) {
                queryJson["subbook_id"] = resultJson.subbook_id[0]
            }
            currentBook.q(queryJson);
            const result = await client.search(currentBook);
            
            return res.status(200).json({
                data: result.response,
                currentmoralityNumber: resultJson.morality_num[0],
                tripitakaId: resultJson.tripitaka_id[0],
                // page,
            });
        } catch(error) {
            return res.status(500).json({
                message: error
            })
        }
    }
    
    public static getCompareBookByFilter = async (req:Request, res: Response, next: NextFunction) => {
        try {
            const { tripitakaId, bookType, moralityNumber, subbookId } = req.body;
            let client;
            let queryJson: {[key: string]: any} = {tripitaka_id: tripitakaId}
            if (bookType === 'TH') {
                client = new SolrNode(config.tribuddhaTH);
            } else {
                client = new SolrNode(config.tribuddhaPali);
            }
            const lastRecordQuery = client.query().q({tripitaka_id: tripitakaId}).sort({morality_num: "desc"}).start(0).rows(1);
            const lastRecordRaw = await client.search(lastRecordQuery);
            const lastRecord = JSON.parse(JSON.stringify(lastRecordRaw.response.docs[0]));
            const bookQuery = client.query().qop("AND").sort({morality_num: "asc"});
        
            if (moralityNumber === 1) {
                queryJson["morality_num"] = `(${moralityNumber} OR ${moralityNumber + 1} OR ${moralityNumber + 2})`;
            } else if (moralityNumber === lastRecord.morality_num[0]) {
                queryJson["morality_num"] = `(${moralityNumber} OR ${moralityNumber - 1} OR ${moralityNumber - 2})`;
            } else {
                queryJson["morality_num"] = `(${moralityNumber} OR ${moralityNumber - 1} OR ${moralityNumber + 1})`;
            }
            if(subbookId !== tripitakaId) {
                queryJson["subbook_id"] = subbookId
            }
            bookQuery.q(queryJson);
            const result = await client.search(bookQuery);
            return res.status(200).json({
                data: result.response,
            });
        } catch(error) {
            return res.status(500).json({
                message: error
            })
        }
    }

    public static getAllBook = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { bookVersion } = req.body;
            const client = new SolrNode(config.bookInformation);
            const bookQuery = client.query().q(`{!child of="*:* -_nest_path_:*"}version:${bookVersion}`).rows(100).addParams([{field:"fq", value:"display_name:*"}]).fl("*,[child limit=100]")
            const result = await client.search(bookQuery);
            return res.status(200).json({
                data: result.response,
            });
        } catch(error) {
            console.log('er:',error);
            
            return res.status(500).json({
                message: error
            })
        }
    }
}
export default ControllerClass;