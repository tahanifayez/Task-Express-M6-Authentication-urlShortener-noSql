const mongoose = require("mongoose");
const dotenv=require("dotenv")
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URL);
    console.log(`mongo connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("Data base does not connected");
  }
};

module.exports = connectDB;
