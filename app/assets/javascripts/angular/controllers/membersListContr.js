'use strict'

rclvapp.controller('membersListContr', ['$scope', '$http', 'getMembers', function($scope, $http, getMembers){
    $scope.pageClass = "membersList";

    var loadMembers = function(){
        $scope.members = getMembers.query();
        window.members = getMembers.query();
    };

    loadMembers();

    $scope.toggleInfo = function(){
      debugger;
    };

}]);