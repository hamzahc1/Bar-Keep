angular.module('barkeep', [
	'barkeep.yelpBars',
  'ngRoute'
])

.config(function($routeProvider, $httpProvider){
	$routeProvider
	.when('/getBars',	{
		templateUrl: 'client/yelpBars/yelpBars.html',
		controller: 'yelpBarsController'
	})
	.otherwise({redirectTo:'/'});
});