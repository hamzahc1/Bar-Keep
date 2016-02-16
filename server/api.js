//api request
var oauthSignature = require('oauth-signature');  
var n = require('nonce')();  
var request = require('request');  
var qs = require('querystring');  
var _ = require('lodash');
var keys = require('../config/yelpAPI.js');


var yelp_request = function(userParameters, callback){
	var httpMethod = 'GET';
	var yelpApiUrl = 'http://api.yelp.com/v2/search';
	var consumerSecret = keys.CONSUMER_SECRET;
  var tokenSecret = keys.TOKEN_SECRET;

	var required_parameters = {
    oauth_consumer_key : keys.CONSUMER_KEY,
    oauth_token : keys.TOKEN,
    oauth_nonce : n(),
    oauth_timestamp : n().toString().substr(0,10),
    oauth_signature_method : 'HMAC-SHA1',
    oauth_version : '1.0',
    limit: 10
  };

  var parameters = _.assign(userParameters, required_parameters);
  var signature = oauthSignature.generate(httpMethod, yelpApiUrl, parameters, consumerSecret, tokenSecret, { encodeSignature: false});
  parameters.oauth_signature = signature;
  var parameterURL = qs.stringify(parameters);
  var queryUrl = yelpApiUrl + '?' + parameterURL;

  request(queryUrl, function(error, response, body){
    return callback(error, response, body);
  });

};

module.exports = yelp_request;

// yelp_request({location: 'San Francisco', category_filter:'bars', limit: '1',}, function(error, resp, body){
// 	if(error){
// 		console.log(error);
// 	} else {
// 		body = JSON.parse(body);
// 		console.log(body.businesses[0].name);
// 	}
// });