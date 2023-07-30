const express = require('express');
const router = express.Router();
const Post = require('../model/Post');
router.get('/', (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  console.log("In the get method of the api,js file ")
  Post.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});
router.post('/post', (req, res, next) => {
  // console.log(req.body)
  if (req.body.title) {
    Post.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else { 
    res.json({
      error: 'The input field is empty',
    });
  }
});
router.delete('/delete/:id', (req, res, next) => {
  Post.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});
module.exports = router;