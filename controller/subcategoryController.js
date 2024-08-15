const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

// Create a SubCategory
const createSubCategory = async (req, res) => {
    try {
        // Check if the specific Category exists to create a SubCategory
        const category = await Category.findById(req.params.categoryId);
        if (!category) return res.status(404).json({ message: 'Category not found' });
    
        // Create new SubCategory, if the given Category exists
        const newSubCategory = new SubCategory({
          ...req.body,
          categoryId: req.params.categoryId,
          taxApplicable: req.body.taxApplicable ?? category.taxApplicable,
          tax: req.body.tax ?? category.tax,
        });
        
        // Save the new Subcategory to database
        const savedSubCategory = await newSubCategory.save();
        res.status(201).json(savedSubCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all SubCategories
const getAllSubCategories = async (req, res) => {
    try {
        // Find all SubCategories in the database
        const subCategories = await SubCategory.find();
        res.status(200).json(subCategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all SubCategories under a Category
const getSubCategoriesByCategory = async (req,res) => {
    try {
        // Find by Category in the database
        const subCategories = await SubCategory.find({ categoryId: req.params.categoryId });
        res.status(200).json(subCategories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a SubCategory by ID
const getSubCategorybyId = async (req, res) => {
    try {
        // Find by ID in the database
        const subCategory = await SubCategory.findById(req.params.id);
        if (!subCategory) return res.status(404).json({ message: 'SubCategory not found' });
        res.status(200).json(subCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Edit a SubCategory
const editSubcategory = async (req, res) => {
    try {
        // Find and update the SubCategory in the database
        const updatedSubCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSubCategory) return res.status(404).json({ message: 'SubCategory not found' });
        res.status(200).json(updatedSubCategory);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createSubCategory,
    getAllSubCategories,
    getSubCategoriesByCategory,
    getSubCategorybyId,
    editSubcategory
}