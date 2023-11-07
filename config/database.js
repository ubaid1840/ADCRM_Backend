const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MY_USERNAME}:${process.env.MY_PASSWORD}@adcrmcluster.sculjzv.mongodb.net/${process.env.MY_DATABASE}`);
    console.log('Connected to the database');
  } catch (err) {
    console.error('Connection error', err);
  }
};

module.exports = connectDB;
