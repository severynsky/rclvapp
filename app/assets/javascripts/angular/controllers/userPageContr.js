'use strict'

rclvapp.controller('userPageContr', ['$scope', '$http', '$routeParams', 'getUsers', function($scope, $http, $routeParams, getUsers){
    $scope.pageClass = "userPage";

    user = getUsers.get({id: $routeParams.userId}, function(){
        $scope.print = {
            name: user.name,
            role: user.role,
            email: user.email,
            image: user.image,
            phone: user.phone,
            address: user.address,
            education: user.education,
            work: user.work,
            interests: user.interests,
            full_data: user.full_data,
            languages: user.languages,
            nationality: user.nationality,
            date_of_birth: user.date_of_birth
        };

    });

}]);
