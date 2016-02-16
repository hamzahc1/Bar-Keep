var mongoose = require('mongoose');

var BarSchema = new mongoose.Schema({
	barName: String,
	barPhone: String,
	barURL: String,
	barRatingURL: String,
	city: String,
	latitude: Number,
	longitude: Number,
});

module.exports = mongoose.model('Bar', BarSchema);