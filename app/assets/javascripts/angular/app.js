rclvapp = angular.module('rclvapp', [
  'templates',
  'ngRoute',
  'ngResource',
  'ngSanitize'
]);


rclvapp.run(function(){
    console.log('angular app is running')
});