'use strict'

rclvapp.controller('projectsListContr', ['$scope', '$http', 'getProjects', function($scope, $http, getProjects ){
    $scope.pageClass = "projectsList";

    var loadProjects = function(){
        $scope.projects = getProjects.query();
        window.projects = getProjects.query();
    };

    loadProjects();

    console.info('hello from projects ctrl')

}]);