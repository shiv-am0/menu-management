const express = require('express');
const router = express.Router();
const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

// Create a SubCategory
router.post('/:categoryId', async (req, res) => {
  try {
    const category = await Category.findById(req.params.categoryId);
    if (!category) return res.status(404).json({ message: 'Category not found' });

    const newSubCategory = new SubCategory({
      ...req.body,
      categoryId: req.params.categoryId,
      taxApplicable: req.body.taxApplicable ?? category.taxApplicable,
      tax: req.body.tax ?? category.tax,
    });
    
    const savedSubCategory = await newSubCategory.save();
    res.status(201).json(savedSubCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all SubCategories
router.get('/', async (req, res) => {
  try {
    const subCategories = await SubCategory.find();
    res.status(200).json(subCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all SubCategories under a Category
router.get('/category/:categoryId', async (req, res) => {
  try {
    const subCategories = await SubCategory.find({ categoryId: req.params.categoryId });
    res.status(200).json(subCategories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a SubCategory by ID
router.get('/:id', async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) return res.status(404).json({ message: 'SubCategory not found' });
    res.status(200).json(subCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit a SubCategory
router.put('/:id', async (req, res) => {
  try {
    const updatedSubCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedSubCategory) return res.status(404).json({ message: 'SubCategory not found' });
    res.status(200).json(updatedSubCategory);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
