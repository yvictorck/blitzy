// modules =================================================
var express        = require('express');
var gzippo = require('gzippo');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override')


// configuration ===========================================

// config files
var db = require('./config/db');

var routes = require('./app/routes/index');
var blog = require('./app/routes/blog');
var contactus = require('./app/routes/contactus');
mongoose.connect(db.url); //mongodb://victor:victsor@ds031661.mongolab.com:31661/heroku_app26810511/test');

var port = process.env.PORT || 8080; // set our port


// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
// app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

app.use(gzippo.staticGzip('' + __dirname + '/public'));
// app.use('/', routes);
app.use('/blog', blog);
app.use('/contactus',contactus)


app.use('*', gzippo.staticGzip('' + __dirname + '/public'));
// app.use(routes.index);

// routes ==================================================
// require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
console.log('Magic happens da on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app