'use strict'

rclvapp.controller('projectsListContr', ['$scope', '$http', 'getProjects', function($scope, $http, getProjects ){
    $scope.pageClass = "projectsList";

    var loadProjects = function(){
        $scope.projects = getProjects.query();
        window.projects = getProjects.query();
    };
    
    // $(document.body).css("background", "url(images/projects-1.jpg)");
    loadProjects();

}]);