angular.module('barkeep', [
	'barkeep.yelpBars',
	'barkeep.requests',
	'barkeep.faveBars',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider){
	$routeProvider
	.when('/getBars',	{
		templateUrl: 'client/yelpBars/yelpBars.html',
		controller: 'yelpBarsController'
	})
	.when('/faveBars', {
		templateUrl: 'client/faveBars/faveBars.html',
		controller: 'faveBarsController'
	})
	.otherwise({redirectTo:'/'});
});