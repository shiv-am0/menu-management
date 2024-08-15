const express = require('express');
const router = express.Router();
const { createItem, getAllItems, getItemsBySubCategory, searchItemByName, getItemById, editItem } = require('../controller/itemController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - name
 *         - baseAmount
 *         - subCategoryId
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the item
 *         name:
 *           type: string
 *           description: The name of the item
 *         image:
 *           type: string
 *           description: URL of the item image
 *         description:
 *           type: string
 *           description: Description of the item
 *         baseAmount:
 *           type: number
 *           description: The base amount of the item
 *         discount:
 *           type: number
 *           description: The discount applied to the item
 *         totalAmount:
 *           type: number
 *           description: The total amount after discount
 *         taxApplicable:
 *           type: boolean
 *           description: Whether tax is applicable for this item
 *         tax:
 *           type: number
 *           description: The tax percentage for the item
 *         subCategoryId:
 *           type: string
 *           description: The ID of the subcategory this item belongs to
 *       example:
 *         name: Coca Cola
 *         image: https://example.com/image.png
 *         description: A popular soft drink
 *         baseAmount: 50
 *         discount: 5
 *         totalAmount: 45
 *         taxApplicable: true
 *         tax: 10
 */

/**
 * @swagger
 * tags:
 *   name: Items
 *   description: API to manage items within subcategories.
 */

/**
 * @swagger
 * /items/search:
 *   post:
 *     summary: Search items by name
 *     tags: [Items]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the item to search for
 *             example:
 *               name: "Coca Cola"
 *     responses:
 *       200:
 *         description: List of matching items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 */
router.post('/search', searchItemByName);

/**
 * @swagger
 * /items/{subCategoryId}:
 *   post:
 *     summary: Create a new item under a specific subcategory
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: subCategoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the subcategory to create the item in
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       201:
 *         description: The item was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Subcategory not found
 *       500:
 *         description: Some server error
 */
router.post('/:subCategoryId', createItem);

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get all items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: List of all items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 *       500:
 *         description: Some server error
 */
router.get('/', getAllItems);

/**
 * @swagger
 * /items/subcategory/{subCategoryId}:
 *   get:
 *     summary: Get all items under a specific subcategory
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: subCategoryId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the subcategory to retrieve items for
 *     responses:
 *       200:
 *         description: List of items under the subcategory
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 *       404:
 *         description: Subcategory not found
 *       500:
 *         description: Some server error
 */
router.get('/subcategory/:subCategoryId', getItemsBySubCategory);

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Get an item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the item to retrieve
 *     responses:
 *       200:
 *         description: The item description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 *       500:
 *         description: Some server error
 */
router.get('/:id', getItemById);

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update an item by ID
 *     tags: [Items]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Item'
 *     responses:
 *       200:
 *         description: The item was successfully updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 *       500:
 *         description: Some server error
 */
router.put('/:id', editItem);

module.exports = router;
