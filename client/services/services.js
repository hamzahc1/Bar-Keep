angular.module('barkeep.requests', [])
	.factory('RequestBars', function($http){
		return{
		getBars : function(){
			console.log('in here!');
			return $http({
				method: 'GET',
				url: '/getBars',
				params: {'location': 'San Francisco', 'category_filter':'bars' },
			}).then(function(response){
				console.log('RESPONSE IS --------------->', response.data);
				return response.data;
			}, function(error){
				console.log('we got a big problem yo');
			});
		},
		addBar: function(item) {
			// var barName = item.name;
			console.log("adding a bar was called", item.name);
			return $http({
				method: 'POST',
				url: '/getBars',
				data: {'bar': item.name, 'phone': item.phone}
			})
			.then(function(response) {
				console.log('THIS IS THE RESPONSE', response);
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
		}
		};
	});