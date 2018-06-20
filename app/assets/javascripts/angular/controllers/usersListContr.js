'use strict'

rclvapp.controller('usersListContr', ['$scope', '$rootScope', '$http', 'Auth', 'getAllUsers', 'getUsers', '$timeout', function($scope, $rootScope, $http, Auth, getAllUsers, getUsers, $timeout){
    $scope.pageClass = "usersList";
    $scope.loadingData = true;
    $scope.dataLoaded = false;
    var users;
    $scope.users;

    console.log('users: ', $rootScope.userList);

    if (!$rootScope.userList) {
      Auth.currentUser()
        .then(function(user) {
          $scope.users = getAllUsers.query();
          handleData($scope.users);
        }, function(error){
          $scope.errorMessage = error.data.error;
          $scope.users = getUsers.query();
          handleData($scope.users);
        });
    } else {
      $scope.loadingData = false;
      $scope.dataLoaded = true;
    }

    var handleData = function(source) {
      source.$promise.then(function (result) {
        $scope.loadingData = false;
        $scope.dataLoaded = true;
        $rootScope.userList = result;
      });
    }

    // $scope.toggleInfo = function(){
    //   debugger;
    // };

}]);