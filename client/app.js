var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/client', express.static( __dirname + '/client'));