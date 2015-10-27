// Tests using IIFE Syntax
(function () {

  // http://www.scriptscoop.net/t/41ba8825d12a/jasmine-trying-to-test-an-angularjs-service-function.html

  describe("ProductService Tests", function() {
    var testService = null;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(ProductService) {
      testService = ProductService;
    }));

    it('There should be 6 products', function(){ //parameter name = service name
      expect( testService.getProducts().length ).toEqual(6);
     });

    it("getDefaultProduct() should equal the first product in the list", function() {
      expect(testService.getProducts()[0]).toEqual(testService.getDefaultProduct());
    });

  });

})();
//@ sourceURL=pen.js
