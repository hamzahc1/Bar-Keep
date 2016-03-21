angular.module('barkeep.requests', [])
	.factory('RequestBars', function($http){
		return{
		getBars : function(location){
			console.log(location);
			return $http({
				method: 'GET',
				url: '/getBars',
				params: {'location': location, 'category_filter':'bars' },
			}).then(function(response){
				// console.log('RESPONSE IS --------------->', response.data);
				return response.data;
			}, function(error){
				// console.log('we got a big problem yo');
			});
		},
		addBar: function(item) {
			var latitude = item.location.coordinate.latitude;
			var longitude = item.location.coordinate.longitude;
			var barRating = item.rating_img_url;
			var barURL = item.url;
			console.log(barRating);
			console.log(barURL);
			console.log("adding a bar was called", item.location.city);
			return $http({
				method: 'POST',
				url: '/getBars',
				data: {'bar': item.name, 'phone': item.phone, 'city': item.location.city, 'url': barURL, 'rating': barRating, 'longit': longitude, 'latit': latitude}
			})
			.then(function(response) {
				// console.log('THIS IS THE RESPONSE', response);
				return response.data;
			}, function(error) {
				console.error('THERE IS AN ERROR');
			});
		},
		loadAllBars: function(){
			return $http({
				method: 'GET',
				url: '/faveBars',
			})
			.then(function(response){
				return response.data;
			}, function(error){
				console.log('Error from the Angular factory!', error);
			});
		},
		deleteBar : function(barName){
			console.log(barName);
			return $http({
				method: 'DELETE',
				url: '/faveBars',
				params: {'barName': barName},
			}).then(function(response){
				// console.log('BAR DELETED IS --------------->', response);
				return response.data;
			}, function(error){
				console.log('ERROR DELETING THE BAR!');
			});
		},
		};
	});