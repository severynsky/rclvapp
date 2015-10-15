'use strict'

rclvapp.controller('usersListContr', ['$scope', '$http', 'Auth', 'getAllUsers', 'getUsers', '$timeout', function($scope, $http, Auth, getAllUsers, getUsers, $timeout){
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

    // debugger;
    // if(users != undefined){
    //   $scope.loaded == true;
    //   console.log('true')
    //   $(".square").fadeOut()
    // };



    $scope.toggleInfo = function(){
      debugger;
    };

}]);