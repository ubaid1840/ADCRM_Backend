const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://ubaidrehman1840:humfmpk004@adcrmcluster.sculjzv.mongodb.net/ADCRM_DB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the database');
  } catch (err) {
    console.error('Connection error', err);
  }
};

module.exports = connectDB;
