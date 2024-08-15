const mongoose = require('mongoose');
require('dotenv').config();

// Function to connect to MongoDB.
const connectDB = async () => {
  try {
    // Read a token from the environment variables and connect.
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error', error);
    process.exit(1);
  }
};

module.exports = connectDB;