rclvapp.factory('getNews', [ '$resource', function($resource){
    // return $resource('/newsitems/:id.json', {id: '@id'},{
    // return $resource('https://graph.facebook.com/100008391697251/permissions',{
    return $resource('https://graph.facebook.com/v2.4/521978191/feed?access_token=CAACEdEose0cBACyEAz5B8uzKYnNS6RIrZBO5hlmhZCvD3b5ZC8Dxn3eHoXabDMR89ZAzva0wN8j6gcImpeK1iNvpyMgcxMmtmYWCWFBDPBFjOW460vjLTH99k00QbZCgoQ5lKvJNvNGAb9LGbAKRfvBwjLZAdVD3fgabVTTOxwXwai8qck4bJX7PAJGEMX5D3K2KLZBhCNVZCAZDZD',{
        query: {
            method: 'GET',
            isArray: true,
            headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
    });

}]);
