// yelpBarsController
angular.module('barkeep.yelpBars', [])

.controller('yelpBarsController', function($scope, RequestBars){
	// $scope.bars = ['hello', 'world']; 
	$scope.listBars = function(location){
	// 	console.log("INSIDE LIST BARS!")
		RequestBars.getBars(location)
		.then(function(data){
			console.log("INSIDE INNER FUNCTION!");
			// $scope.$apply(function(){
			$scope.bars = data;
			$scope.location='';
			// });
			console.log('THE BARS ARE!', $scope.bars);
			console.log('the first bar is', $scope.bars[0].name);
		});
	};

		$scope.faveBar = function(bar){
		// console.log("BAR IS", bar);
		RequestBars.addBar(bar);
		// $scope.newItem = '';
		};

});