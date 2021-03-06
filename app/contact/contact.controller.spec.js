// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Contact Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;
    var vm;
    var $scope;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      $scope.vmMain = {};
      vm = $controller('ContactController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect($scope.vmMain.title).toBe("Contact Us");
      //expect($scope.vmMain.description).toBe("")

    });

});

})();
//@ sourceURL=pen.js
