(function() {

    var mapGeoLocation = ['$window', function($window) {
        var template = '<p><span id="status">looking up geolocation...</span></p>' +
                       '<br /><div id="map"></div>',
            mapContainer = null,
            status = null;

        function link(scope, elem, attrs) {
           status = angular.element(document.getElementById('status'));
           mapContainer = angular.element(document.getElementById('map'));

           mapContainer.attr('style', 'height:' + scope.height +
                             'px;width:' + scope.width + 'px');
           $window.navigator.geolocation.getCurrentPosition(mapLocation, geoError);
        }

          function mapLocation(pos) {
              status.html('Found your location! Longitude: ' + pos.coords.longitude +
                          ' Latitude: ' + pos.coords.latitude);

             
        }

        function geoError(error) {
           status.html('failed lookup ' + error.message);
        }


        return {
           scope: {
               height: '@',
               width: '@'
           },
           link: link,
           template: template
        };
    }];

  angular.module('weatherApp', [])
    .directive('mapGeoLocation', mapGeoLocation);

}());