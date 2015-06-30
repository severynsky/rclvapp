'use strict'

rclvapp.controller('projectsContr', ['$scope', '$http', 'getProjects', function($scope, $http, getProjects){

    var loadProjects = function(){
        $scope.projects = getProjects.query();
    };

    loadProjects();
    console.info('hello from projects ctrl')

}]);