'use strict'

rclvapp.controller('homeContr', ['$scope',
  function($scope){
    console.info("hello from home cotnroller");

    angular.element(document).ready(
      $initialFunction());
  
  }
]);