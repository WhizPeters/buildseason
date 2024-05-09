// db.js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://Movies:Movies@movie.z2xlqbz.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// Export the connection
module.exports = mongoose.connection;
