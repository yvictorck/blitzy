var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
// 	res.sendfile(__dirname +'/public/index.html');
//   //res.render('index', { title: 'Express' });
// });

router.get('*', function (req, res) {
    res.sendFile(__dirname +'/public/index.html');
});


// exports.partials = function(req, res){
//   var filename = req.params.filename;
//   if(!filename) return;  // might want to change this
//   res.render("partials/" + filename );
// };



module.exports = router;

