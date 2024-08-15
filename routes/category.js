const express = require('express');
const router = express.Router();
const { createCategory, getAllCategories, getCategoryById, editCategory } = require('../controller/categoryController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Category:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the category
 *         name:
 *           type: string
 *           description: The name of the category
 *         image:
 *           type: string
 *           description: URL of the category image
 *         description:
 *           type: string
 *           description: Description of the category
 *         taxApplicable:
 *           type: boolean
 *           description: Whether tax is applicable for this category
 *         tax:
 *           type: number
 *           description: The tax percentage for the category
 *         taxType:
 *           type: string
 *           description: The type of tax (e.g., percentage, flat)
 *       example:
 *         name: Drinks
 *         image: https://example.com/image.png
 *         description: Various beverages
 *         taxApplicable: true
 *         tax: 10
 *         taxType: percentage
 */

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: API to manage categories in the menu.
 */

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: The category was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
router.post('/', createCategory);

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of all categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Category'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category to retrieve
 *     responses:
 *       200:
 *         description: The category description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getCategoryById);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Update a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the category to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: The category was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Category'
 *       404:
 *         description: Category not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', editCategory);

module.exports = router;
