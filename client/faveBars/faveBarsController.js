angular.module('barkeep.faveBars', [])

.controller('faveBarsController', function($scope, RequestBars){
	$scope.loadBars = function(){
		RequestBars.loadAllBars()
			.then(function(allBars){
				$scope.bars = allBars;
				// console.log('LOAD BAR DATA:', $scope.bars);
					 var map = new google.maps.Map(document.getElementById('map'), {
				      zoom: 2,
				      center: new google.maps.LatLng(37.784863, -122.408891),
				      mapTypeId: google.maps.MapTypeId.ROADMAP
				    });
					  var infowindow = new google.maps.InfoWindow();
					  var marker;
					  var i;
					  for (i = 0; i < $scope.bars.length; i++) {  
				      marker = new google.maps.Marker({
				        position: new google.maps.LatLng($scope.bars[i].latitude, $scope.bars[i].longitude),
				        map: map,
				        animation: google.maps.Animation.DROP
				      });
				    google.maps.event.addListener(marker, 'click', (function(marker, i) {
				            return function() {
				              infowindow.setContent($scope.bars[i].barName);
				              infowindow.open(map, marker);
				            };
				          })(marker, i));
				    }
			});
	};
	$scope.removeBar = function(barName){
		// console.log('IN DELETE!');
		RequestBars.deleteBar(barName)
		.then(function(){
			$scope.loadBars();
		});
	};
});