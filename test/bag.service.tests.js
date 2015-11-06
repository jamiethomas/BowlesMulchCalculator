// Tests using IIFE Syntax
(function () {

  // http://www.scriptscoop.net/t/41ba8825d12a/jasmine-trying-to-test-an-angularjs-service-function.html

  describe("BagService Tests", function() {
    var testService = null;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(BagService) {
      testService = BagService;
    }));

    it('There should be 3 Bags', function(){ //parameter name = service name
      expect( testService.getBags().length ).toEqual(3);
     });

    it("getDefaultBag() should equal the first Bag in the list", function() {
      expect(testService.getBags()[0]).toEqual(testService.getDefaultBag());
    });

  });

})();
//@ sourceURL=pen.js
