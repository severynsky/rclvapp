rclvapp.filter('regular', ['$filter',  function($filter){
  return function(input){
    var output = [];

    angular.forEach(input, function(event) {
      if(event.event_type == "regular"){
        output.push(event)
      };
    });

    return output
  };
}]);