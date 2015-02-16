var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var BlogPost = require('../models/Blog.js');

/* GET /blogposts listing. */
router.get('/', function(req, res, next) {
  console.log('beforeeee');
  BlogPost.find(function (err, blogposts) {   
    if (err) return next(err);
    console.log(blogposts);
    res.json(blogposts);
  });
});

/* POST /blogposts */
router.post('/', function(req, res, next) {
  console.log('in blog route',req.body);
  BlogPost.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /blogposts/id */
router.get('/:id', function(req, res, next) {
  BlogPost.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /blogposts/:id */
router.put('/:id', function(req, res, next) {
  BlogPost.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /blogposts/:id */
router.delete('/:id', function(req, res, next) {
  BlogPost.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
