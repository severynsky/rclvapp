'use strict'

rclvapp.controller('newsListContr', ['$scope', '$http', 'getNews', function($scope, $http, getNews){

    var loadNews = function(){
        $scope.news = getNews.query({}, function(u, getResponseHeaders){
          console.info('loaded');
          $scope.loading = false;
          window.loading = false;
        });
    };
    $scope.pageClass = "newsList";

    loadNews();

}]);