rclvapp.factory('getMembers', [ '$resource', function($resource){
    return $resource('/members/:id.json', {id: '@id'},{
        query: {
            method: 'GET',
            isArray: false
        }
    });
}]);
