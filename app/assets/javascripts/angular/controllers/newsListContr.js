'use strict'

rclvapp.controller('newsListContr', ['$scope', '$http', 'getNews', '$translate', 'langSetter', function($scope, $http, getNews, $translate, langSetter){
    var loadNews = function(){
        $scope.news = getNews.query({}, function(u, getResponseHeaders){
          $scope.loading = false;
        });
    };
    $scope.pageClass = "newsList";

    loadNews();

}]);