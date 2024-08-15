const express = require('express');
const { createSubCategory, getAllSubCategories, getSubCategoriesByCategory, getSubCategorybyId, editSubcategory } = require('../controller/subcategoryController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     SubCategory:
 *       type: object
 *       required:
 *         - name
 *         - categoryId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the subcategory
 *         name:
 *           type: string
 *           description: The name of the subcategory
 *         image:
 *           type: string
 *           description: URL of the subcategory image
 *         description:
 *           type: string
 *           description: Description of the subcategory
 *         taxApplicable:
 *           type: boolean
 *           description: Whether tax is applicable for this subcategory
 *         tax:
 *           type: number
 *           description: The tax percentage for the subcategory
 *         categoryId:
 *           type: string
 *           description: The ID of the category this subcategory belongs to
 *       example:
 *         name: Soft Drinks
 *         image: https://example.com/image.png
 *         description: Non-alcoholic beverages
 *         taxApplicable: true
 *         tax: 10
 */

/**
 * @swagger
 * tags:
 *   name: SubCategories
 *   description: API to manage subcategories within a category.
 */

/**
 * @swagger
 * /subcategories/{categoryId}:
 *   post:
 *     summary: Create a new subcategory under a specific category
 *     tags: [SubCategories]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category to create the subcategory in
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubCategory'
 *     responses:
 *       201:
 *         description: The subcategory was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Some server error
 */
router.post('/:categoryId', createSubCategory);

/**
 * @swagger
 * /subcategories:
 *   get:
 *     summary: Get all subcategories
 *     tags: [SubCategories]
 *     responses:
 *       200:
 *         description: List of all subcategories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SubCategory'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllSubCategories);

/**
 * @swagger
 * /subcategories/category/{categoryId}:
 *   get:
 *     summary: Get all subcategories under a specific category
 *     tags: [SubCategories]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category to retrieve subcategories for
 *     responses:
 *       200:
 *         description: List of subcategories under the category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SubCategory'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Some server error
 */
router.get('/category/:categoryId', getSubCategoriesByCategory);

/**
 * @swagger
 * /subcategories/{id}:
 *   get:
 *     summary: Get a subcategory by ID
 *     tags: [SubCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the subcategory to retrieve
 *     responses:
 *       200:
 *         description: The subcategory description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 *       404:
 *         description: Subcategory not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getSubCategorybyId);

/**
 * @swagger
 * /subcategories/{id}:
 *   put:
 *     summary: Update a subcategory by ID
 *     tags: [SubCategories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the subcategory to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SubCategory'
 *     responses:
 *       200:
 *         description: The subcategory was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SubCategory'
 *       404:
 *         description: Subcategory not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', editSubcategory);

module.exports = router;
