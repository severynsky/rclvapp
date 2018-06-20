rclvapp.filter('passed', ['$filter',  function($filter){
  return function(input){

    var output = [];
    angular.forEach(input, function(date) {
      var rightNow = new Date();
      var res = rightNow.toISOString().slice(0,10).replace(/-/g,"-");
      if(date.date < res){
        output.push(date)
      };
    });

    return output
  };
}]);