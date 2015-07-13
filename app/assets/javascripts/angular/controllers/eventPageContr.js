rclvapp.controller('eventPageContr', ['$scope', '$http', '$routeParams', 'getEvents', function($scope, $http, $routeParams, getEvents){
    $scope.pageClass = "eventPage";

    eventItem = getEvents.get({id: $routeParams.eventId}, function(){
        $scope.print = {
            some: 'some',
            title: eventItem.title,
            created_at: eventItem.date,
            description: eventItem.description,
            place: eventItem.place,
            address: eventItem.address,
            description: eventItem.description
        };
    });

}]);