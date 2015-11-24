// Tests using IIFE Syntax
(function () {

  /* Test Code */
  describe('Main Controller Tests', function () {

    beforeEach(angular.mock.module('app'));

    var $controller;

    beforeEach(angular.mock.inject(function(_$controller_){
      $controller = _$controller_;

      $scope = {};
      testController = $controller('MainController', { $scope: $scope });
    }));

    it("Check default values", function() {
      expect($scope.title).toBe("Calculator");
      expect($scope.description).toBe("Use this handy calculator to determine how much product you need.");
    });

});

})();
//@ sourceURL=pen.js
