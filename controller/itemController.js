const Item = require("../models/Item");
const SubCategory = require("../models/SubCategory");

// Create an Item
const createItem = async (req, res) => {
  try {
        // Check if the specific SubCategory exists to create an Item
        const subCategory = await SubCategory.findById(req.params.subCategoryId);
        if (!subCategory)
            return res.status(404).json({ message: "SubCategory not found" });

        // Create new Item, if the given SubCategory exists
        const newItem = new Item({
        ...req.body,
        subCategoryId: req.params.subCategoryId,
        taxApplicable: req.body.taxApplicable ?? subCategory.taxApplicable,
        tax: req.body.tax ?? subCategory.tax,
        totalAmount: req.body.baseAmount - req.body.discount,
        });

         // Save the new Item to database
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
  } catch (err) {
        res.status(500).json({ message: err.message });
  }
};

// Get all items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get items under a sub-category
const getItemsBySubCategory = async (req, res) => {
    try {
        // Find all Items in the database
        const items = await Item.find({ subCategoryId: req.params.subCategoryId });
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Search an item using name
const searchItemByName = async (req, res) => {
    try {
        // Check if the name property is passed to search item by name
        if(!req.body.name) {
          return res.status(400).json({ message: "Please provide a search name"});
        }
    
        // Perform the search by name
        const items = await Item.find({ name: req.body.name });
    
        // Check if the item is not found
        if(!items.length) {
          return res.status(404).json({ message: "Data not found"});
        }
    
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get items by ID
const getItemById = async (req, res) => {
    try {
        // Find by ID in the database
        const item = await Item.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit an Item
const editItem = async (req, res) => {
    try {
        // Find and update the Item in the database
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createItem,
    getAllItems,
    getItemsBySubCategory,
    searchItemByName,
    getItemById,
    editItem
}