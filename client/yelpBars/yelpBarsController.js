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
			$scope.displayBar='';
			// });
			console.log('THE BARS ARE!', $scope.bars);
			console.log('the first bar is', $scope.bars[0].name);
		});
	};

		$scope.faveBar = function(bar){
		// console.log("BAR IS", bar);
		RequestBars.addBar(bar)
		.then(function(){
			$scope.displayBar = bar.name+' was added to your favourite bars, nice.';
			// console.log(bar.name);
		});
		// $scope.newItem = '';
		};

});