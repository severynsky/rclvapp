'use strict'

rclvapp.controller('membersListContr', ['$scope', '$http', 'getMembers', function($scope, $http, getMembers){

    var loadMembers = function(){
        $scope.members = getMembers.query();
        window.members = getMembers.query();
    };

    loadMembers();

}]);