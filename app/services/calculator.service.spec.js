// Tests using IIFE Syntax
(function () {

  // http://www.scriptscoop.net/t/41ba8825d12a/jasmine-trying-to-test-an-angularjs-service-function.html

  describe("CalculatorService Tests", function() {
    var testService = null;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.inject(function(CalculatorService) {
      testService = CalculatorService;
      deliveryFee = 25;
    }));

    // calculateOrderByArea Tests

    describe("calculateOrderByArea Tests", function() {

      it("calculateOrderByArea should not be null", function() {
        expect(testService.calculateOrderByArea).toBeDefined();
      });

      it("Check default values", function() {

        var length = 0;
        var width = 0;
        var depth = 3;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByArea(length, width, depth, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(length).toBe(0);
        expect(width).toBe(0);
        expect(depth).toBe(3);
        expect(delivered).toBe(false);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(0);
        expect(order.buckets).toBe(0);
        expect(order.deliveries).toBe(0);
        expect(order.totalCost).toBe(0);
        expect(order.deliveryCost).toBe(0);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);

      });

      it("Should handle negative values", function() {
        var length = -1;
        var width = -1;
        var depth = -1;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByArea(length, width, depth, selectedProduct, delivered, deliveryFee);

        // Caluclated values
        expect(order.yards).toBe(0);
        expect(order.buckets).toBe(0);
        expect(order.deliveries).toBe(0);
        expect(order.totalCost).toBe(0);
        expect(order.deliveryCost).toBe(0);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);
      });

      it("Should handle calculations correctly for pickup", function() {
        var length = 10;
        var width = 10;
        var depth = 3;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByArea(length, width, depth, selectedProduct, delivered, deliveryFee);

        // Calculated values
        expect(order.yards).toBe(1);
        expect(order.buckets).toBe(2);
        expect(order.deliveries).toBe(1);
        expect(order.deliveryCost).toBe(25); // Delivery fee is calculated but not applied
        expect(order.totalCost).toBe(30);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);

      });

      it("Should handle calculations correctly for delivery", function() {
        var length = 10;
        var width = 10;
        var depth = 3;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = true;

        var order = testService.calculateOrderByArea(length, width, depth, selectedProduct, delivered, deliveryFee);

        // Calculated values
        expect(order.yards).toBe(1);
        expect(order.buckets).toBe(2);
        expect(order.deliveries).toBe(1);
        expect(order.deliveryCost).toBe(25);
        expect(order.totalCost).toBe(55);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);

      });
    });

    // calculateOrderByBags Tests

    describe("calculateOrderByBags Tests", function() {

      it("calculateOrderByBags should not be null", function() {
        expect(testService.calculateOrderByBags).toBeDefined();
      });

      it("Check default values", function() {
        var size = 0;
        var count = 0;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByBags(size, count, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(size).toBe(0);
        expect(count).toBe(0);
        expect(delivered).toBe(false);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(0);
        expect(order.buckets).toBe(0);
        expect(order.deliveries).toBe(0);
        expect(order.totalCost).toBe(0);
        expect(order.deliveryCost).toBe(0);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);

      });

      it("Should handle negative values", function() {
        var size = -1;
        var count = -1;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByBags(size, count, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(size).toBe(-1);
        expect(count).toBe(-1);
        expect(delivered).toBe(false);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(0);
        expect(order.buckets).toBe(0);
        expect(order.deliveries).toBe(0);
        expect(order.totalCost).toBe(0);
        expect(order.deliveryCost).toBe(0);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);
      });

      it("Should handle calculations correctly for pickup", function() {
        var size = 1.5;
        var count = 18;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByBags(size, count, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(size).toBe(1.5);
        expect(count).toBe(18);
        expect(delivered).toBe(false);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(1);
        expect(order.buckets).toBe(2);
        expect(order.deliveries).toBe(1);
        expect(order.totalCost).toBe(30);
        expect(order.deliveryCost).toBe(25);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);
      });

      it("Should handle calculations correctly for delivery", function() {
        var size = 1.5;
        var count = 18;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = true;

        var order = testService.calculateOrderByBags(size, count, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(size).toBe(1.5);
        expect(count).toBe(18);
        expect(delivered).toBe(true);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(1);
        expect(order.buckets).toBe(2);
        expect(order.deliveries).toBe(1);
        expect(order.totalCost).toBe(55);
        expect(order.deliveryCost).toBe(25);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);
      });

    });

    // calculateOrderByBuckets Tests

    describe("calculateOrderByBuckets Tests", function() {

      it("calculateOrderByBuckets should not be null", function() {
        expect(testService.calculateOrderByBuckets).toBeDefined();
      });

      it("Check default values", function() {
        var buckets = 0;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByBuckets(buckets, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(buckets).toBe(0);
        expect(delivered).toBe(false);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(0);
        expect(order.buckets).toBe(0);
        expect(order.deliveries).toBe(0);
        expect(order.totalCost).toBe(0);
        expect(order.deliveryCost).toBe(0);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);

      });

      it("Should handle negative values", function() {
        var buckets = -1;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByBuckets(buckets, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(buckets).toBe(-1);
        expect(delivered).toBe(false);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(0);
        expect(order.buckets).toBe(0);
        expect(order.deliveries).toBe(0);
        expect(order.totalCost).toBe(0);
        expect(order.deliveryCost).toBe(0);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);
      });

      it("Should handle calculations correctly for pickup", function() {
        var buckets = 10;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByBuckets(buckets, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(buckets).toBe(10);
        expect(delivered).toBe(false);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(5);
        expect(order.buckets).toBe(10);
        expect(order.deliveries).toBe(1);
        expect(order.totalCost).toBe(150);
        expect(order.deliveryCost).toBe(25);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);
      });

      it("Should handle calculations correctly for delivery", function() {
        var buckets = 10;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = true;

        var order = testService.calculateOrderByBuckets(buckets, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(buckets).toBe(10);
        expect(delivered).toBe(true);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(5);
        expect(order.buckets).toBe(10);
        expect(order.deliveries).toBe(1);
        expect(order.totalCost).toBe(175);
        expect(order.deliveryCost).toBe(25);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);
      });

      it("Should not round up values", function() {
        var buckets = 1;
        var selectedProduct = { name: "Natural Shredded Hardwood", price: 15, deliveryLimit: 20 };
        var delivered = false;

        var order = testService.calculateOrderByBuckets(buckets, selectedProduct, delivered, deliveryFee);

        // Form values
        expect(buckets).toBe(1);
        expect(delivered).toBe(false);

        // Check Order
        expect(order).not.toBe(null);
        expect(order.yards).toBe(.5);
        expect(order.buckets).toBe(1);
        expect(order.deliveries).toBe(1);
        expect(order.totalCost).toBe(15);
        expect(order.deliveryCost).toBe(25);
        expect(order.delivered).toBe(delivered);
        expect(order.selectedProduct).toBe(selectedProduct);
      });

    });

  });

})();
//@ sourceURL=pen.js
