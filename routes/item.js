const express = require('express');
const router = express.Router();
const Item = require('../models/Item');
const SubCategory = require('../models/SubCategory');

// Create an Item
router.post('/:subCategoryId', async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.subCategoryId);
    if (!subCategory) return res.status(404).json({ message: 'SubCategory not found' });

    const newItem = new Item({
      ...req.body,
      subCategoryId: req.params.subCategoryId,
      taxApplicable: req.body.taxApplicable ?? subCategory.taxApplicable,
      tax: req.body.tax ?? subCategory.tax,
      totalAmount: req.body.baseAmount - req.body.discount,
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all Items
router.get('/', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all Items under a SubCategory
router.get('/subcategory/:subCategoryId', async (req, res) => {
  try {
    const items = await Item.find({ subCategoryId: req.params.subCategoryId });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get an Item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search Items by Name
router.get('/searchItem', async (req, res) => {
  try {
    console.log(`Body: ${req.body.name}`);
    console.log(`Query: ${req.query.name}`);
    const items = await Item.find({ name: req.query.name });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Edit an Item
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
