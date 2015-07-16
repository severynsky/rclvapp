rclvapp.controller('contactContr', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $scope.pageClass = "contactContr";
    
      FB = null;
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        // if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v2.4&appId=591757474261298";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    
}]);