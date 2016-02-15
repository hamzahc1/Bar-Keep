angular.module('barkeep', [
  'ngRoute'
])
.config(function($routeProvider, $httpProvider){
	$routeProvider
	.when('/getBars',	{
		templateUrl: '/yelpBars/yelpBars.html',
		controller: 'yelpBarsController'
	});
});