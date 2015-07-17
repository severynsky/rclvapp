rclvapp.filter('passed', ['$filter',  function($filter){
  return function(input){
    // console.log(input)
    var output = [];

    // debugger;
    angular.forEach(input, function(date) {
      var rightNow = new Date();
      var res = rightNow.toISOString().slice(0,10).replace(/-/g,"-");
      // debugger;
      // console.log(date.date)
      // console.log(res)
      if(date.date < res){
        output.push(date)
      };
    });

    return output
  };
}]);