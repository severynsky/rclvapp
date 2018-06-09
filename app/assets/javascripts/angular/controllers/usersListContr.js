'use strict'

rclvapp.controller('usersListContr', ['$scope', '$http', 'Auth', 'getAllUsers', 'getUsers', '$timeout', function($scope, $http, Auth, getAllUsers, getUsers, $timeout){
    $scope.pageClass = "usersList";
    $scope.loadingData = true;
    $scope.dataLoaded = false;

    var handleData = function(source) {
      source.$promise.then(function (result) {
        $scope.loadingData = false;
        $scope.dataLoaded = true;
        $scope.users = result;
      });
    }

    Auth.currentUser()
      .then(function(user) {
        $scope.users = getAllUsers.query();
        handleData($scope.users);
      }, function(error){
        $scope.errorMessage = error.data.error;
        $scope.users = getUsers.query();
        handleData($scope.users);
      });


    // $scope.toggleInfo = function(){
    //   debugger;
    // };

}]);