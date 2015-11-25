(function() {
  angular
    .module('app')
    .controller("MainController", MainController);

  function MainController($scope) {

    var vm = this;

    vm.title = "Calculator";
    vm.description = "Use this handy calculator to determine how much product you need.";
  }
})();
