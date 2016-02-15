var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());


app.use('/client', express.static( __dirname + '/client'));

app.route('/').
  options(function (req, res, next) {
      res.status(200).end();
      next();
  }).
  get(function (req, res) {
  	res.sendFile(path.join(__dirname.split("/").slice(0,-1).join('/') + '/index.html'));
  });


var port = 8080;
app.listen(8080, function(){
console.log("Server listening on....", port);
});

// module.exports = app;