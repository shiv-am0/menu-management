const express = require('express');
const router = express.Router();
const { createCategory, getAllCategories, getCategoryById, editCategory } = require('../controller/categoryController');

// Map the routes to their respective functions
router.post('/', createCategory);
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.put('/:id', editCategory);

module.exports = router;
