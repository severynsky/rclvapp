'use strict'

rclvapp.controller('newsListContr', ['$scope', '$http', 'getNews', function($scope, $http, getNews){

    var loadNews = function(){
        $scope.news = getNews.query();
    };

    loadNews();

}]);