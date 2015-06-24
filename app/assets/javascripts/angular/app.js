rclvapp = angular.module('rclvapp', [
  'templates',
  'ngRoute',
  'ngResource'
]);


rclvapp.run(function(){
    console.log('angular app is running')
});