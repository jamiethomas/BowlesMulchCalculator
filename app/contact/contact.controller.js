(function() {
  angular
    .module("app")
    .controller("ContactController", ContactController);

  function ContactController($scope, CONFIG) {

    var vm = this;

    $scope.vmMain.title = "Contact Us";
    $scope.vmMain.description = "We'd love to hear from you.";

  }
})();
