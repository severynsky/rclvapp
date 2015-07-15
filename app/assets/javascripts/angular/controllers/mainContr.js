rclvapp.controller('mainContr', ['$scope', 'Auth', function($scope, Auth){

  Auth.currentUser().then(function(user) {
    $scope.user = user;
    window.user = user;
    $scope.user_logged_in = Auth.isAuthenticated();
    window.user_logged_in = Auth.isAuthenticated();
  });

}]);