'use strict'

rclvapp.controller('eventsContr', ['$scope', '$http', 'getEvents', function($scope, $http, getEvents){

    var loadEvents = function(){
        $scope.events = getEvents.query({}, function(u, getResponseHeaders){
        });
    };
    $scope.pageClass = "eventsList";

    loadEvents();

}]);