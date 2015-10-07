rclvapp.factory('getNews', [ '$resource', function($resource){
    // return $resource('/newsitems/:id.json', {id: '@id'},{
    // return $resource('https://www.facebook.com/RotaryClubLvivCentre/feed', {id: '@id'},{
    return $resource('https://graph.facebook.com/v2.4/me?fields=feed%7Bfull_picture%2Cpicture%2Cmessage%2Cstory%7D&access_token=CAACEdEose0cBAAqkesZAB52kH7AQBqPafluPB6T7hEQzmUxZAOd9kOUeXepSKT3pp82ZC7G5s2XzWobydM4vvjRuvsTnDwZCSpczqrH4deKu35fORJoiSocZCkaaEI0asxcnGeJ8SJb4ZCqpL8XDoOM1Jn7dUxZBLLTwZCZA5NQc5jfUs5t0MqjIJ3hKrVWZB0m3cXO1zpQUmi9QZDZD',{
    // return $resource('https://graph.facebook.com/100008391697251/permissions',{
        query: {
            method: 'GET',
            isArray: true
        }
    });
}]);

