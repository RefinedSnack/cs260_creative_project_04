const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/gamegenius', {
  useNewUrlParser: true
});

// Create a scheme for comments
const commentSchema = new mongoose.Schema({
  content: String,
  time: Number,
  author: String,
  page: String,
  rating: Number
});

// Create a model for comments
const Comment = mongoose.model('Comments', commentSchema);

//upload a comment
app.post('/api/comment/:id', async (req, res) => {
  const comment = new Comment({
    content: req.body.content,
    time: req.body.time,
    author: req.body.author,
    page: req.params.id,
    rating: req.body.rating
  });
  try {
    await comment.save();
    res.send(comment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//read comments by page
app.get('/api/comment/:id', async (req, res) => {
  try {
    const comments = await Comment.find({
      page: req.params.id
    });
    res.send(comments);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//updated a comment
app.put('/api/comment/:id', async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, {
      content: req.body.content,
      time: req.body.time,
      author: req.body.author,
      rating: req.body.rating
    });
    res.send(comment);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

//deletes a comment based on the comment _id
app.delete('/api/comment/:id', async (req, res) => {
  try {
    await Comment.findByIdAndRemove(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});



app.listen(3000, () => console.log('Server listening on port 3000!'));
