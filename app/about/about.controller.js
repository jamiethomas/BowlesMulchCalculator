(function() {
  angular
    .module("app")
    .controller("AboutController", AboutController);

  function AboutController($scope, CONFIG) {

    var vm = this;

    $scope.vmMain.title = "About Us";
    $scope.vmMain.description = "Bowles Mulch est. 1990.";

  }
})();
