'use strict'

rclvapp.controller('homeContr', ['$scope', 'Auth', '$timeout', '$route', '$translate',
  function($scope, Auth, $timeout, $route, $translate){
    console.info("hello from home cotnroller");
    $scope.pageClass = "homePage";
    angular.element(document).ready(
      $initialFunction());

    $scope.changeLanguage = function(langKey){
      $translate.use(langKey);
    };

    Auth.currentUser().then(function(user) {
      $scope.user = user;
      $scope.user_logged_in = Auth.isAuthenticated();
    }); 

    $scope.logout = function(){
      console.info('logged out');
      Auth.logout();
    };

    $timeout(function() {
      Auth.logout();
      console.info('It`s OK, website logged out in mind of secureness!');
    }, 1800000);
  
  }
]);