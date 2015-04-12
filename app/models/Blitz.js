// // grab the mongoose module
// var mongoose = require('mongoose');

// // define our nerd model
// // module.exports allows us to pass this to other files when it is called
// module.exports = mongoose.model('Nerd', {
// 	name : {type : String, default: ''}
// });


var mongoose = require('mongoose');

var BlitzSchema = new mongoose.Schema({
  gametime: String,
  kyung : [Number],
  mina : [Number],
  jess : [Number],
  vic : [Number]
});

module.exports = mongoose.model('Blitz', BlitzSchema);
