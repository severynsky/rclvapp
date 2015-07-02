rclvapp.controller('projectPageContr', ['$scope', '$http', '$routeParams', 'getProjects', function($scope, $http, $routeParams, getProjects){

    projectItem = getProjects.get({id: $routeParams.projectId}, function(){
        $scope.print = {
            title: projectItem.title,
            created_at: projectItem.created_at,
            description: projectItem.description,
            status: projectItem.status,
        };

    });

}]);