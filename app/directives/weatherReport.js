(function() {
    angular.module('weatherApp').directive('weatherReport', function(){
          return {
            restict: 'E',
              templateUrl: 'directives/weatherReport.htm',
              replace: true,
              scope: {
                  weatherDay: "=",
                  convertToDate: "&",
                  dateFormat: "@"
              }
        }    
    });
}());