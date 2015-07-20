'use strict'

rclvapp.controller('newsListContr', ['$scope', '$http', 'getNews', '$translate', 'langSetter', '$localStorage', function($scope, $http, getNews, $translate, langSetter, $localStorage){
    var loadNews = function(){
        $scope.news = getNews.query({}, function(u, getResponseHeaders){
          $scope.loading = false;
        });
        window.news = getNews.query({});

    };
    // $localStorage.lang = "some title";
    $scope.lang = $localStorage.lang;
    debugger;
    $scope.pageClass = "newsList";
    loadNews();



}]);