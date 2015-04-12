var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var BlitzPost = require('../models/Blitz.js');

/* GET /blitzposts listing. */
router.get('/', function(req, res, next) {
  console.log('beforeeee');
  BlitzPost.find(function (err, blitzposts) {   
    if (err) return next(err);
    console.log(blitzposts);
    res.json(blitzposts);
  });
});

/* POST /blitzposts */
router.post('/', function(req, res, next) {
  console.log('in blitz route',req.body);
  BlitzPost.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /blitzposts/id */
router.get('/:id', function(req, res, next) {
  BlitzPost.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /blitzposts/:id */
router.put('/:id', function(req, res, next) {
  BlitzPost.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /blitzposts/:id */
router.delete('/:id', function(req, res, next) {
  BlitzPost.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
