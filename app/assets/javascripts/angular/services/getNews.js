rclvapp.factory('getNews', function($resource){
    return $resource('/news_items/:id.json', {id: '@id'},{
        update: {
            method: "PUT"
        },
        query: {
            method: 'GET',
            isArray: false
        }
    });
});
