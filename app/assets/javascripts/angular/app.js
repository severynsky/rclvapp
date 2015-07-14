rclvapp = angular.module('rclvapp', [
  'templates',
  'ngRoute',
  'ngResource',
  'ngSanitize',
  'ngAnimate',
  'Devise',
  'uiGmapgoogle-maps'
]);

rclvapp.config([ '$httpProvider', 'uiGmapGoogleMapApiProvider', 
  function($httpProvider, uiGmapGoogleMapApiProvider) {

    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
    });
    $httpProvider.defaults.withCredentials = true;
  }
]);
rclvapp.run(function(){
    console.log('angular app is running')
});

