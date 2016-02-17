var express = require("express");
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var apiCall = require('./api.js');
app.use(bodyParser.json());
var db = require('./BarSchema.js');
mongoose.connect('mongodb://localhost/barkeep');
var keys = require('../config/yelpAPI.js');
// var plivo = require('plivo');
// var p = plivo.RestAPI({
//   authId: keys.PLIVO_ID,
//   authToken: keys.PLIVO_TOKEN
// });

// var params = {
//     'src': '13306807074', // Sender's phone number with country code
//     'dst' : '14153167181', // Receiver's phone Number with country code
//     'text' : "Hi, message from Hamzah", // Your SMS Text Message - English
//     //'text' : "こんにちは、元気ですか？" // Your SMS Text Message - Japanese
//     //'text' : "Ce est texte généré aléatoirement" // Your SMS Text Message - French
//     'url' : null, // The URL to which with the status of the message is sent
//     'method' : "POST" // The method used to call the url
// };

// p.send_message(params, function (status, response) {
//     console.log('Status: ', status);
//     console.log('API Response:\n', response);
// });

app.use('/client', express.static(__dirname.split("/").slice(0,-1).join('/') + '/client'));
app.use('/style', express.static(__dirname.split("/").slice(0,-1).join('/') + '/style'));
app.use('/node_modules', express.static(__dirname.split("/").slice(0,-1).join('/') + '/node_modules'));

app.route('/').
  options(function (req, res, next) {
      res.status(200).end();
      next();
  }).
  get(function (req, res) {
  	res.sendFile(__dirname.split("/").slice(0,-1).join('/') + '/index.html');
  });

app.get('/getBars', function(req, res){
	apiCall(req.query, function(error, resp, body){
    body = JSON.parse(body);
    console.log('body is  ------>',body.businesses);
		res.send(200, body.businesses);
	});
	// res.send(200);
});

app.post('/getBars', function(req, res){
  db.findOne({barName: req.body.bar}, function(error, found){
    if(error){
      console.log('error searching in db!');
      res.send(404);
    } else if(found) {
      console.log('Item already in the database, you are good to go!');
      return res.send(201);
    } else {
      db.create({barName: req.body.bar, barPhone: req.body.phone, city: req.body.city, barURL: req.body.url, barRatingURL: req.body.rating, latitude: req.body.latit, longitude: req.body.longit}, function(error, newItem){
        if(error){
          console.log('ERROR POSTING TO THE SERVER:', error);
          res.send(404);
        } else {
          console.log('Item posted successfully!');
          res.send(201, newItem);
        }
      });
    }
  });
});

app.get('/faveBars', function(req, res){
  db.find({}, function(error, allBars){
    if(error){
      console.log('ERROR RETRIEVING FROM DATABASE!', error);
      res.send(404);
    } else {
      // console.log('got some items for ya!', allBars);
      res.send(200, allBars);
    }
  });
});

app.delete('/faveBars', function(req,res){
  db.remove({barName: req.query.barName}, function(err, deleted){
    if(err){
      console.log('error deleting from database');
      res.send(404);
    } else {
      console.log('all deleted!');
      res.send(204, deleted);
    }
  });
});

var port = 8080;
app.listen(8080, function(){
console.log("Server listening on....", port);
});