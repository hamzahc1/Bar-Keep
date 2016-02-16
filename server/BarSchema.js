var mongoose = require('mongoose');

var BarSchema = new mongoose.Schema({
	barName: String,
	barPhone: String,
	city: String,
});

module.exports = mongoose.model('Bar', BarSchema);