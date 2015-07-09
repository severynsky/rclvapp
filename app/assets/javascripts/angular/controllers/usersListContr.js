'use strict'

rclvapp.controller('usersListContr', ['$scope', '$http', 'Auth', 'getAllUsers', 'getUsers', function($scope, $http, Auth, getAllUsers, getUsers){
    $scope.pageClass = "usersList";

    Auth.currentUser().then(function(user) {

      var loadAllUsers = function(){
        $scope.users = getAllUsers.query();
      };
      loadAllUsers();
    }, function(error){
        var loadUsers = function(){
        $scope.users = getUsers.query();
      };
      loadUsers();
    });

    var loadUsers = function(){
      $scope.users = getUsers.query();
      window.users = getUsers.query();
    };
    loadUsers();

    $scope.toggleInfo = function(){
      debugger;
    };

}]);