(function() {
    angular.module('weatherApp').service('weatherService',['$http', function($http) {

this.GetWeather = function(city, days){
    var q = city;
    var d = days;

    return $http.get('http://api.apixu.com/v1/forecast.json?key=c1753f85ada74dc6989123958182501&q=' + q + '&days=' + d);
   
    };    
 
}]);
}());