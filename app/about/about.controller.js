(function() {
  angular
    .module("app")
    .controller("AboutController", AboutController);

  function AboutController($scope, CONFIG) {

    var vm = this;

    $scope.vmMain.title = "";
    $scope.vmMain.description = "";

  }
})();
