'use strict'

rclvapp.controller('newsListContr', ['$scope', '$http', 'getNews', 'getCategories', '$translate', 'langSetter', '$localStorage', '$routeParams', function($scope, $http, getNews, getCategories, $translate, langSetter, $localStorage, $routeParams){
    $scope.pageClass = "newsPage";
    $scope.categoryTitle = $routeParams.newsCat
    
    var loadNews = function(){
        $scope.news = getNews.query({}, function(u, getResponseHeaders){
          $scope.loading = false;
        });

        $scope.categories = getCategories.query({});
        window.news = getNews.query({});

    };

    $scope.lang = $localStorage.lang;
    $scope.pageClass = "newsList";
    loadNews();



}]);