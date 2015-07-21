'use strict'

rclvapp.controller('catListContr', ['$scope', '$http', '$routeParams', 'getNews', 'getCategories', '$localStorage', function($scope, $http, $routeParams, getNews, getCategories, $localStorage){
    $scope.pageClass = "newsPage";
    if($routeParams.newsCat){
        $scope.categoryTitle = $routeParams.newsCat
    }
    
    var loadNews = function(){
        $scope.news = getNews.query({}, function(u, getResponseHeaders){
          $scope.loading = false;
        });
        
        window.news = getNews.query({});
        $scope.categories = getCategories.query({});

    };
    $scope.lang = $localStorage.lang;
    $scope.pageClass = "newsList";
    loadNews();

}]);