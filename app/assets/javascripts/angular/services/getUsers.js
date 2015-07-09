rclvapp.factory('getUsers', [ '$resource', function($resource){
    return $resource('/users/:id.json', {id: '@id'},{
        query: {
            method: 'GET',
            isArray: false
        }
    });
}]);
