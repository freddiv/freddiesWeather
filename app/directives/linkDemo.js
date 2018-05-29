(function() {
   var linkDemo = function(){
          return {
            restict: 'A',
              link: function(scope, elem, attrs){
                elem.on('click', function(){
                   console.log(elem); 
                });
              },
        }    
    };
    angular.module('weatherApp')
        .directive('linkDemo', linkDemo);
}());