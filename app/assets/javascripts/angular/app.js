rclvapp = angular.module('rclvapp', [
  'templates',
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'Devise'
]);

rclvapp.config([
    '$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.withCredentials = true;
    }
])
rclvapp.run(function(){
    console.log('angular app is running')
});

