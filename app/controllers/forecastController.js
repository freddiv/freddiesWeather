(function() {
    angular.module('weatherApp')
    .controller('forecastController', ['$scope', '$routeParams', 'cityService', 'countryService', 'weatherService', function($scope, $routeParams, cityService, countryService, weatherService) {
    $scope.city = cityService.city;
    $scope.country = countryService.country;
    $scope.days = $routeParams.days || '5';
    
    console.log('weatherApp')
    weatherService.GetWeather($scope.city, $scope.days) 
        .then(function(response) {
        console.log(response.data)        
        $scope.weatherResult = response.data;
        $scope.weatherLocation = response.data.location;
        $scope.currentWeather = response.data.current;
        $scope.forecastWeather = response.data.forecast.forecastday;
        console.log($scope.forecastWeather);
        angular.forEach($scope.forecastWeather, function (day, key) {
            day.date = $scope.convertToDate(day.date);
            console.log('day: ' ,day) ;    
        });
        
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
        //set date adjusted for offset
        var originalD = new Date(dt);
        var offset = originalD.getTimezoneOffset();
        var actualDate = new Date(originalD.getTime() + offset*60000)
 console.log(actualDate)
           return actualDate;  
    };
    
}]);
}());