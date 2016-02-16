var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/client', express.static(__dirname.split("/").slice(0,-1).join('/') + '/client'));
app.use('/node_modules', express.static(__dirname.split("/").slice(0,-1).join('/') + '/node_modules'));

app.route('/').
  options(function (req, res, next) {
      res.status(200).end();
      next();
  }).
  get(function (req, res) {
  	res.sendFile(__dirname.split("/").slice(0,-1).join('/') + '/index.html');
  });

var port = 8080;
app.listen(8080, function(){
console.log("Server listening on....", port);
});