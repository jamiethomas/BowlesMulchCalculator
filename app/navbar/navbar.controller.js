(function() {
  angular
    .module("app")
    .controller("NavbarController", NavbarController);

  function NavbarController($scope, CONFIG, $location) {

    var vm = this;

    vm.isActive = isActive;

    function isActive(viewLocation) {
      return viewLocation === $location.path();
    }

  }
})();
