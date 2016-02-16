var mongoose = require('mongoose');

var BarSchema = new mongoose.Schema({
	barName: String,
	barPhone: String,
	barURL: String,
	barRatingURL: String,
	city: String
});

module.exports = mongoose.model('Bar', BarSchema);