'use strict'

rclvapp.controller('homeContr', ['$scope', 'Auth', '$timeout', '$route', '$translate',
  function($scope, Auth, $timeout, $route, $translate){
    console.info("hello from home cotnroller");
    $scope.pageClass = "homePage";
    
    angular.element(document).ready(
      $initialFunction()
    );

    var config = {
      headers: {'X-HTTP-Method-Override': 'POST'}
    };

    $scope.changeLanguage = function(langKey){
      $translate.use(langKey);
    };

    Auth.currentUser().then(function(user) {
      $scope.user = user;
      $scope.user_logged_in = Auth.isAuthenticated();
    }); 

    $scope.login = function(email, pass){
      var credentials = {email: email, password: pass};
      Auth.login(credentials, config).then(function(user){console.info(user);});
    };

    $scope.$on('devise:new-session', function(event, currentUser) {
      window.location = "/"
    });

    $scope.logout = function(){
      console.info('logged out');
      Auth.logout();
    };

    $scope.$on('devise:logout', function(event, currentUser) {
      window.location = "/"
    });

    $scope.password_reset = function(){
      console.info('pressed');
      debugger;
      $scope.submit({method: 'POST', 
        url: '../users/password.json',
        data: {user: {email: $scope.email}},
        success_message: "Reset instructions have been sent to your e-mail address.",
        error_entity: $scope.login_error});
    };

    $timeout(function() {
      Auth.logout();
      console.info('It`s OK, website logged out in mind of secureness!');
    }, 1800000);
  
  }
]);