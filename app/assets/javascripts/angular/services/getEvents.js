rclvapp.factory('getEvents', [ '$resource', function($resource){
    return $resource('/events/:id.json', {id: '@id'},{
        query: {
            method: 'GET',
            isArray: false
        }
    });
}]);
