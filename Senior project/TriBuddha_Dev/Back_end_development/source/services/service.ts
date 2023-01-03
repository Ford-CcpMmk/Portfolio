import SolrNode from 'solr-node';

class Service {

    public static setFilter = (
        bookQuery: SolrNode.Query, 
        filter: {
            texts: string[], 
            categories: string[],
            tripitakaId: number, 
            startMoralityNumber: number | string,
            endMoralityNumber: number | string,
            subbookMoralityNumber: {[key: string]: any}[],
            isRanking: boolean
        }
    ): void => {
         if (filter) {
            const { tripitakaId, startMoralityNumber, endMoralityNumber, isRanking, texts, categories, subbookMoralityNumber } = filter;
            let filterQueryString = `tripitaka_id: ${tripitakaId}`
            let queryString: string = "";
            if(isRanking) {
                bookQuery.sort({score: "desc"})
            } else {
                bookQuery.sort({tripitaka_id: "asc", morality_num: "asc"})
            }

            if(subbookMoralityNumber && subbookMoralityNumber.length > 0) {
                let query = ''
                for (const subbook of subbookMoralityNumber ) {
                    query += ` (subbook_id:${subbook.subbookId} AND morality_num:[${subbook.subbookstartMoralityNumber} TO ${subbook.subbookendMoralityNumber}]) OR`
                }
                filterQueryString +=  ` AND (${query.slice(0, -3)})`
            } else {
                filterQueryString += ` AND morality_num: [${startMoralityNumber} TO ${endMoralityNumber}]`
            }
    
            if(categories.length > 0) {
                filterQueryString += " AND " + this.setArrayStringFilterOR(categories, 'category', 'OR', queryString);
            }
    
            if(texts.length > 0) {
                queryString += `${this.setArrayStringFilterOR(texts, 'text', 'AND', queryString)}`;
            }
            bookQuery.q(queryString).addParams([{field: "fq", value: filterQueryString}])
        } else {
            bookQuery.q("*:*");
        }
    }

    private static setArrayStringFilterOR = (texts: string[], fieldName: string, conditionType: string, queryString: string) => {
        if(texts.length > 0) {
            let queryText = '';
            texts.forEach((text: string) => {
                queryText += `"${text}" ${conditionType} `;
            });
            queryText = queryText.slice(0, - (conditionType.length + 1));
            return `${fieldName}: ( ${queryText} )`;
        }
    }

}

export default Service