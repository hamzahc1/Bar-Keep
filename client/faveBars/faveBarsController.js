angular.module('barkeep.faveBars', [])

.controller('faveBarsController', function($scope, RequestBars){
	$scope.loadBars = function(){
		RequestBars.loadAllBars()
			.then(function(allBars){
				$scope.bars = allBars;
				console.log('LOAD BAR DATA:', $scope.bars);
			});
	};

});