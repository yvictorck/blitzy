var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");


router.post('/', function(req, res) {

// // Create a Direct transport object
var transport = nodemailer.createTransport("Direct", {debug: true});

console.log('Direct/smtp transport configured');

var from_form = req.body.name+' <'+req.body.email+'>';
console.log(from_form);

// Message object
var message = {

    // sender info
    from:from_form,// 'Sendesr Name <sendeddr@example.com>',

    // Comma separated list of recipients
    to: 'aaasvictor@gmail.com',//'"Receiver Name" <aaasvictor@gmail.com>',

    // Subject of the message
    subject: req.body.subject, //'from heroku now is 607, Nodemailer is unicode friendly ✔', //

    // plaintext body
    //text: 'Hello to myself!',

    // HTML body
    html:req.body.message//'<p><b>Hello</b> to myself <img src="cid:note@node"/></p>'+
        // '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@node"/></p>'

};

console.log('Sending Mail');


transport.sendMail(message, function(error, response){
    if(error){
        console.log(error);
        res.json({sent:'no'});
        //res.render('contactus', { title: 'CONTACT US' ,msg_sent: 'no' });
    }else{
        console.log("Message sent: " + response.message);
        res.json({sent:'yes'});

        //res.render('contactus', { title: 'CONTACT US' ,msg_sent: 'yes' });
    }
});


    
});
module.exports = router;
