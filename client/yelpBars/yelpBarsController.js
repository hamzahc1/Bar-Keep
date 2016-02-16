// yelpBarsController
angular.module('barkeep.yelpBars', [])

.controller('yelpBarsController', function($scope, RequestBars){
	// $scope.bars = ['hello', 'world']; 
	$scope.listBars = function(){
	// 	console.log("INSIDE LIST BARS!")
		RequestBars.getBars()
		.then(function(data){
			console.log("INSIDE INNER FUNCTION!");
			// $scope.$apply(function(){
			$scope.bars = data;
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