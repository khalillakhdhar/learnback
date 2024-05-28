const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const connectDB = async () => {
  console.log('Attempting to connect to MongoDB...');
  try {
    //const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/elearn");
    const conn = await mongoose.connect( "mongodb://127.0.0.1:27017/elearn");
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};


module.exports = connectDB;
