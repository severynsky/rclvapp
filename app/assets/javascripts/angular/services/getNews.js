rclvapp.factory('getNews', [ '$resource', function($resource){
    return $resource('/newsitems/:id.json', {id: '@id'},{
        query: {
            method: 'GET',
            isArray: false
        }
    });
}]);
