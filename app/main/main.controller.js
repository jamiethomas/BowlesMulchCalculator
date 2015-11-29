(function() {
  angular
    .module('app')
    .controller("MainController", MainController);

  function MainController($scope) {

    var vm = this;

    vm.title = "";
    vm.description = "";
  }
})();
