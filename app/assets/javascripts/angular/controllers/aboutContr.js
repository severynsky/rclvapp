rclvapp.controller('aboutContr', ['$scope', '$http', '$routeParams', 'uiGmapGoogleMapApi', function($scope, $http, $routeParams, uiGmapGoogleMapApi){

    $scope.pageClass = "aboutOurRotary";

    $scope.print = {
      some: 'some',
      center: {
        latitude: 49.8421894,
        longitude: 24.0292025
      },
      options: {
      scrollwheel: false,
      title: "some title"
      },
      marker:{
        id: 0,
        coords: {
          latitude: 49.8421894,
          longitude: 24.0292025
        }
      },
      zoom: 17
        };

}]);