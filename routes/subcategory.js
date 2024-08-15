const express = require('express');
const { createSubCategory, getAllSubCategories, getSubCategoriesByCategory, getSubCategorybyId, editSubcategory } = require('../controller/subcategoryController');
const router = express.Router();

// Map the routes to their respective functions
router.post('/:categoryId', createSubCategory);
router.get('/', getAllSubCategories);
router.get('/category/:categoryId', getSubCategoriesByCategory);
router.get('/:id', getSubCategorybyId);
router.put('/:id', editSubcategory);

module.exports = router;
