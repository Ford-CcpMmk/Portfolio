import express from 'express';
import controller from '../controllers/controller';
const router = express.Router();

router.post('/browse-book/', controller.getBrowseBookByPage);
router.post('/get-all-book/', controller.getAllBook);
router.post('/search-book/', controller.getSearchBookByFilterPage);
router.post('/search-book-text/', controller.getSearchBookTextByFilterPage);
router.post('/compare-text/', controller.getCompareBookByFilter);

export = router;