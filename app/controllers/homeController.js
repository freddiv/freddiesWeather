(function() {
    angular.module('weatherApp')
      .controller('homeController', ['$scope', '$location', 'cityService', 'countryService', function($scope, $location, cityService, countryService) {
    
    $scope.city = cityService.city;
    $scope.country = countryService.country;
    $scope.weatherLocation = {};
    $scope.currentWeather = {};
    $scope.forecastWeather = {};
    
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
       });
      
    $scope.submit = function(){
        console.log($location)
        $location.path('/forecast');
    };
}]);
   
}());