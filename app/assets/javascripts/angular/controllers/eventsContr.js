'use strict'

rclvapp.controller('eventsContr', ['$scope', '$http', 'getEvents', function($scope, $http, getEvents){

    var loadEvents = function(){
        $scope.events = getEvents.query({}, function(u, getResponseHeaders){
          console.info('loaded');
        });
    };
    $scope.pageClass = "eventsList";

    loadEvents();

}]);