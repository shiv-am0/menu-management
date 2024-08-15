const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoryRoutes = require('./routes/category');
const subCategoryRoutes = require('./routes/subcategory');
const itemRoutes = require('./routes/item');
const connectDB = require('./config/db');
const swaggerDocs = require('./swagger');
require('dotenv').config();

// Initialize the express app
const app = express();

// Use middlewares
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
connectDB();

// Map the routes
app.use('/categories', categoryRoutes);
app.use('/subcategories', subCategoryRoutes);
app.use('/items', itemRoutes);

// Define PORT
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

    // Initialize swagger documentation
    swaggerDocs(app, PORT); 
});
