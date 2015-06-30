rclvapp.factory('selectProjects', function(){
    console.info('hello from get projects')

var selectProjects = function(){
    for (var i = 0; i < projectsArr; i++)
      if (projectsArr[i].status == "new"){
        $scope.newArr.push(projectsArr[i]);
      }else if(projectsArr[i].status == "running"){
        $scope.runningArr.push(projectsArr[i]);
      }else{
        $scope.completedArr.push(projectsArr[i]);
      }
    };

});

