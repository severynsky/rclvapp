rclvapp.controller('eventPageContr', ['$scope', '$http', '$routeParams', 'getEvents', 'uiGmapGoogleMapApi', function($scope, $http, $routeParams, getEvents, uiGmapGoogleMapApi){
    $scope.pageClass = "eventPage";

    eventItem = getEvents.get({id: $routeParams.eventId}, function(){
        $scope.print = {
            some: 'some',
            title: eventItem.title,
            date: eventItem.date,
            created_at: eventItem.created_at,
            description: eventItem.description,
            place: eventItem.place,
            address: eventItem.address,
            description: eventItem.description,
            center: { 
              latitude: eventItem.latitude, 
              longitude: eventItem.longitude 
            },
            options: {
              scrollwheel: false,
              title: eventItem.title
            },
            marker:{
              id: 0,
              coords: { 
                latitude: eventItem.latitude, 
                longitude: eventItem.longitude 
              }
            },
            zoom: 17
        };
    });

    uiGmapGoogleMapApi.then(function(maps) {

    });

}]);