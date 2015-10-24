// Tests using IIFE Syntax
(function () {

  describe("Product Service Tests", function() {
    var mockedFactory, $rootScope, $controller;

    beforeEach(module('app', function($provide) {
      mockedFactory = {
        GetProducts: jasmine.createSpy()
      };

      $provide.value('ProductService', mockedFactory);
    }));

    beforeEach(inject(function(_$rootScope_, _$controller_) {
      $rootScope = _$rootScope_;
      $controller = _$controller_;
    }));

    scope = $rootScope.$new();

    it('Should call the GetProducts function', function() {
      scope.GetProducts();
      expect(mockedFactory.GetProducts).toHaveBeenCalled();
    });

    //beforeEach(function() {
    //person = new Person("John", "Doe")
    //});

    it("getProducts should have data", function() {
      // TODO
    });

    it("getDefaultProduct should equal the first product in the list", function() {
      // TODO
    });


  });

})();
//@ sourceURL=pen.js
