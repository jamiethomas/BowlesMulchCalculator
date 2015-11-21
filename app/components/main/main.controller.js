(function() {
  angular
    .module('app')
    .controller("MainController", MainController);

  function MainController($scope) {
    $scope.title = "Calculator";
    $scope.description = "Use this handy calculator to determine how much product you need.";
  }
})();
