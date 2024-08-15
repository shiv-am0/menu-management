const express = require('express');
const router = express.Router();
const { createItem, getAllItems, getItemsBySubCategory, searchItemByName, getItemById, editItem } = require('../controller/itemController');

// Map the routes to their respective functions
router.post('/:subCategoryId', createItem);
router.get('/', getAllItems);
router.get('/subcategory/:subCategoryId', getItemsBySubCategory);
router.get('/search', searchItemByName);
router.get('/:id', getItemById);
router.put('/:id', editItem);

module.exports = router;
