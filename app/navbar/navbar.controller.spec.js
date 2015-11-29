// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Navbar Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;
    var vm;
    var $scope;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      $location = {};
      $location.path = path;
      vm = $controller('NavbarController', { $scope: $scope, $location: $location });
    }));

    it("isActive() should return true", function() {
      expect(vm.isActive("test")).toBe(true);
    });

    function path() {
      return "test";
    }

});

})();
//@ sourceURL=pen.js
