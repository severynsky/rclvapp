rclvapp.factory('getCategories', [ '$resource', function($resource){
    return $resource('/categories/:id.json', {id: '@id'},{
        query: {
            method: 'GET',
            isArray: false
        }
    });
}]);
