var mongoose = require('mongoose');

var BarSchema = new mongoose.Schema({
	barName: String,
	barPhone: String,
});

module.exports = mongoose.model('Bar', BarSchema);