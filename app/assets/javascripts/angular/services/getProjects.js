rclvapp.factory('getProjects', [ '$resource', function($resource){
    return $resource('/projects/:id.json', {id: '@id'},{
        query: {
            method: 'GET',
            isArray: false
        }
    });
    console.info('hello from get projects')
}]);
