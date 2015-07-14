rclvapp.controller('newsPageContr', ['$scope', '$http', '$routeParams', 'getNews', function($scope, $http, $routeParams, getNews){
    $scope.pageClass = "newsPage";

    newsItem = getNews.get({id: $routeParams.newsId}, function(){
        $scope.print = {
            title: newsItem.title,
            intro: newsItem.intro,
            body: newsItem.body,
            date: newsItem.created_at,
            category: newsItem.Category,
            status: newsItem.status,
            publish_date: newsItem.publish_date,
            image: newsItem.image,
            gallery: newsItem.gallery
        };

    });

}]);