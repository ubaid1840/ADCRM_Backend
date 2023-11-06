const User = require('../models/userModel');

// Controller functions for user operations
const userController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get user by ID
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    const newUser = new User(req.body);
    try {
      const {name, email, designation, dp, company} = req.body
      const existingUser = await User.findOne({email})
      if(existingUser){
        console.log('User already exists')
      }
      else{
        const user = await newUser.save();
        // res.status(201).json(user);
        res.send('Done')
      }
     
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Update a user by ID
  updateUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  // Delete a user by ID
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      console.log(user)
      if (user) {
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = userController;
