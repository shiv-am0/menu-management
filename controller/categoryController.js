const Category = require('../models/Category');

// Create a Category
const createCategory = async (req, res) => {
    try {
        // Create new Category and save to database
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all Categories
const getAllCategories = async (req, res) => {
    try {
        // Get all the Categories from the database
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a Category by ID
const getCategoryById = async (req, res) => {
    try {
        // Find by ID in the database
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit a Category
const editCategory = async (req, res) => {
    try {
        // Find and update Category in the database
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) return res.status(404).json({ message: 'Category not found' });
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    editCategory
}