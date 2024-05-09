// index.js
const mongoose = require('mongoose');
const { User } = require('./models'); // Assuming you've defined the User model in models.js

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Define a function to create a new user
async function createUser() {
  try {
    const newUser = new User({
      fullname: 'John Doe',
      email: 'john@example.com',
      username: 'john_doe',
      password: 'password123',
      role: 'user'
    });

    const savedUser = await newUser.save();
    console.log('User created:', savedUser);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    mongoose.disconnect(); // Close the MongoDB connection
  }
}

// Call the function to create a new user
createUser();
