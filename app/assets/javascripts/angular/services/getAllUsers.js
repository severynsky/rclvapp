rclvapp.factory('getAllUsers', [ '$resource', function($resource){
    return $resource('/users/index_all/:id.json', {id: '@id'},{
        query: {
            method: 'GET',
            isArray: false
        }
    });
}]);
