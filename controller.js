app.controller('MainController', ['$scope', 'mainService', function($scope, mainService){
  $scope.getUsers = function(){
    return mainService.getUsers();
  }
  $scope.users = $scope.getUsers();
}])
