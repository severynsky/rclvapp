rclvapp.factory('getNews', [ '$resource',function($resource){
    return $resource('/newsitems/:id.json', {id: '@id'},{
        update: {
            method: "PUT"
        },
        query: {
            method: 'GET',
            isArray: false
        }
    });
}]);
