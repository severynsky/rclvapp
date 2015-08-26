rclvapp.controller('aboutContr', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.pageClass = "aboutOurRotary";

    angular.element(document).ready(function () {
      function initialize() {
          var myLatLng = {lat: 49.8421894, lng: 24.0292025};
          var mapCanvas = document.getElementById('map');
          var mapOptions = {
            center: myLatLng,
            zoom: 18,
            marker: marker,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            options: {
              scrollwheel: false,
            }
          }

          var map = new google.maps.Map(mapCanvas, mapOptions)
          var marker = new google.maps.Marker({
            position: {lat: 49.8421894, lng: 24.0292025}
          });
    }


    google.maps.event.addDomListener(window, 'load', initialize);
    });

}]);