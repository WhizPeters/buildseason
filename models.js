// models.js
const mongoose = require('mongoose');

// Define schema for users collection
const userSchema = new mongoose.Schema({
  fullname: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: String,
  role: String,
  created_at: { type: Date, default: Date.now }
});

// Define schema for playlist_model collection
const playlistSchema = new mongoose.Schema({
  name: String,
  description: String,
  song: [{ type: mongoose.Schema.Types.ObjectId, ref: 'media_model' }],
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  created_at: { type: Date, default: Date.now }
});

// Define schema for media_model collection
const mediaSchema = new mongoose.Schema({
  title: String,
  type: String,
  release_date: Date,
  platform: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Define schema for history collection
const historySchema = new mongoose.Schema({
  media_id: { type: mongoose.Schema.Types.ObjectId, ref: 'media_model' },
  created_at: { type: Date, default: Date.now }
});

// Define models for each schema
const User = mongoose.model('users', userSchema);
const Playlist = mongoose.model('playlist_model', playlistSchema);
const Media = mongoose.model('media_model', mediaSchema);
const History = mongoose.model('history', historySchema);

// Export models
module.exports = { User, Playlist, Media, History };
