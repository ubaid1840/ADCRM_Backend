// const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     designation: {
//         type: String,
//         require : true
//     },
//     dp: {
//         type: String,
//         default: ""
//     },
//     company: {
//         type: String,
//         default: 'Senfeng'
//     }
// })

// module.exports = mongoose.model('User', userSchema)

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  designation: String,
  dp: String,
  company: {
    type: String,
    default: 'Senfeng'
  }
}, {
  collection: 'AllowedUsers' // Define the custom collection name here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
