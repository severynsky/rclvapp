'use strict'

rclvapp.controller('usersListContr', ['$scope', '$http', 'getUsers', function($scope, $http, getUsers){
    $scope.pageClass = "membersList";
    var loadMembers = function(){
        $scope.users = getUsers.query();
        window.users = getUsers.query();
    };
    loadMembers();

    $scope.toggleInfo = function(){
      debugger;
    };

}]);