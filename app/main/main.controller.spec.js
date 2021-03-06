// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Main Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      vm = $controller('MainController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect(vm.title).toBe("");
      expect(vm.description).toBe("");
    });

});

})();
//@ sourceURL=pen.js
