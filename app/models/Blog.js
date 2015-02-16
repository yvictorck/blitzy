// // grab the mongoose module
// var mongoose = require('mongoose');

// // define our nerd model
// // module.exports allows us to pass this to other files when it is called
// module.exports = mongoose.model('Nerd', {
// 	name : {type : String, default: ''}
// });


var mongoose = require('mongoose');

var BlogSchema = new mongoose.Schema({
  title: String,
  content: String
});

module.exports = mongoose.model('Blog', BlogSchema);
