const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define your Comment schema and model
const commentSchema = mongoose.Schema(
  {
    comment: String,
    commentator: String,
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

// Routes for CRUD operations
app.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/comments', async (req, res) => {
  try {
    const { comment, commentator } = req.body;
    const newComment = new Comment({ comment, commentator });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.put('/comments/:id', async (req, res) => {
  try {
    const { comment, commentator } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      { comment, commentator },
      { new: true }
    );
    res.json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.delete('/comments/:id', async (req, res) => {
  try {
    await Comment.findByIdAndRemove(req.params.id);
    res.json({ message: 'Comment deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Define your Netlify function handler
const handler = (event, context) => {
  // Use 'app' to handle API requests
  app(event, context);
};

module.exports = { handler };
