rclvapp.controller('projectPageContr', ['$scope', '$http', '$routeParams', 'getProjects', function($scope, $http, $routeParams, getProjects){
    $scope.pageClass = "projectPage";

    $scope.print = getProjects.get({id: $routeParams.projectId}, function(){
        // $scope.print = {
        //     title: projectItem.title,
        //     created_at: projectItem.created_at,
        //     description: projectItem.description,
        //     custom_id: projectItem.custom_id,
        //     purpose: projectItem.purpose,
        //     status: projectItem.status,
        // };
        console.log('print: ', $scope.print.pictures);

    });

}]);