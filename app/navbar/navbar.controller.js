(function() {
  angular
    .module("app")
    .controller("NavbarController", NavbarController);

  function NavbarController($scope, CONFIG, $location) {

    var vm = this;

    vm.isActive = isActive;

    function isActive(viewLocation) {
      console.log('l:' + viewLocation);
      console.log('p:' + $location.path());
      return viewLocation === $location.path();
    }

  }
})();
