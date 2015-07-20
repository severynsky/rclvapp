'use strict'

rclvapp.controller('homeContr', ['$scope', 'Auth', '$timeout', '$route', '$translate', function($scope, Auth, $timeout, $route, $translate ){

    $scope.pageClass = "homePage";
    
    angular.element(document).ready(
      $initialFunction()
    );

    $scope.changeLanguage = function(langKey){
      $translate.use(langKey);
      if(langKey == "en"){
        langSetter.setLang('eng')
      }else{
        langSetter.setLang('ukr')
      }
    };

    Auth.currentUser().then(function(user) {
      $scope.user = user;
      $scope.user_logged_in = Auth.isAuthenticated();
    }); 

    var config = {
      headers: {'X-HTTP-Method-Override': 'POST'}
    };
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
      $scope.submit({method: 'POST', 
        url: '../users/password.json',
        data: {user: {email: $scope.email}},
        success_message: "Reset instructions have been sent to your e-mail address.",
        error_entity: $scope.login_error});
    };

    // FB = null;
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v2.4&appId=591757474261298";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

    $timeout(function() {
      Auth.logout();
      console.info('It`s OK, website logged out in mind of secureness!');
    }, 1800000);
  
  }
]);