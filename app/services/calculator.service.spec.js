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

    describe("bucketAmount Tests", function() {

      it('bucketAmount should equal double the yard amount', function () {
        for (i = 0; i <= 100; i++) {
          expect(testService.bucketAmount(i)).toBe(i * 2);
        }
      });

      it('bucketAmount should handle zero', function() {
        expect(testService.bucketAmount(0)).toBe(0);
      });

      it('bucketAmount should return zero for negative numbers', function() {
        expect(testService.bucketAmount(-1)).toBe(0);
      });

    });

    describe("cubicYardAmount Tests", function() {

      it("cubicYardAmount should handle zero", function() {
        expect(testService.cubicYardAmount(0, 0, 0)).toBe(0);
      });

      it("cubicYardAmount should handle negative numbers", function() {
        expect(testService.cubicYardAmount(-1, -1, -1)).toBe(0);
        expect(testService.cubicYardAmount(-3, -9, -12)).toBe(0);
      });

      it("cubicYardAmount should do the math correctly", function() {
        expect(testService.cubicYardAmount(3, 9, 12)).toBe(1);
      });

      it("cubicYardAmount should should round up to nearest .5", function() {
        expect(testService.cubicYardAmount(2, 2, 3)).toBe(0);
        expect(yardsCheck(2, 2, 3)).toBeLessThan(0.5);

        expect(testService.cubicYardAmount(3, 3, 12)).toBe(.5);
        expect(yardsCheck(3, 3, 12)).toBeLessThan(0.5);

        expect(testService.cubicYardAmount(3, 5, 12)).toBe(.5);
        expect(yardsCheck(3, 5, 12)).toBeGreaterThan(0.5);

        expect(testService.cubicYardAmount(6, 7, 12)).toBe(1.5);
        expect(yardsCheck(6, 7, 12)).toBeGreaterThan(1.5);

      });

      // Check Function for cubicYardAmount

      function yardsCheck(length, width, depth) {
        return ((length * width * (depth / 12) ) / 27 );
      }

    });

    describe("bagsToYards Tests", function() {

      it("bagsToYards should be defined", function () {
        expect(testService.bagsToYards).toBeDefined();
      });

      it("bagsToYards should handle zero", function () {
        expect(testService.bagsToYards(0, 0)).toBe(0);
      });

      it("bagsToYards should handle negative numbers", function () {
        expect(testService.bagsToYards(-1, -1)).toBe(0);
      });

      it("18 1.5 Cubic Yard Bags should equal 1 yard", function() {
        expect(testService.bagsToYards(1.5, 18)).toBe(1);
      });

      it("13.5 2 Cubic Yard Bags should equal 1 yard", function() {
        expect(testService.bagsToYards(2, 13.5)).toBe(1);
      });

      it("9 3 Cubic Yard Bags should equal 1 yard", function() {
        expect(testService.bagsToYards(3, 9)).toBe(1);
      });

      it("bagsToYards should round up", function() {
        expect(testService.bagsToYards(3, 14)).toBe(1.5);
        expect(bagCheck(3, 14)).toBeGreaterThan(1.5);
      });

      // Check Function for bagsToYards

      function bagCheck(size, count) {
        return (size * count) / 27
      }

    });

    describe("bucketsToYards Tests", function() {

      it("bucketsToYards should be defined", function () {
        expect(testService.bucketsToYards).toBeDefined();
      });

      it("bucketsToYards should handle zero", function () {
        expect(testService.bucketsToYards(0)).toBe(0);
      });

      it("bucketsToYards should handle negative numbers", function () {
        expect(testService.bucketsToYards(-1)).toBe(0);
      });

      it("bucketsToYards should NOT round up", function() {
        expect(testService.bucketsToYards(3)).toBe(1.5);
        expect(bucketCheck(3)).toEqual(1.5);

        for (i = 1; i < 100; i++) {
          expect(testService.bucketsToYards(i)).toBe(i / 2);
          expect(bucketCheck(i)).toEqual(i / 2);
        }
      });

      // Check Function for bucketsToYards

      function bucketCheck(buckets) {
        return (buckets) / 2
      }

    });

    describe("roundHalf Tests", function() {

      it("roundHalf should be defined", function () {
        expect(testService.roundHalf).toBeDefined();
      });

      it("roundHalf should handle zero", function () {
        expect(testService.roundHalf(0)).toBe(0);
      });

      it("roundHalf should handle negative numbers", function () {
        expect(testService.roundHalf(-1)).toBe(0);
      });

    });

  });

})();
//@ sourceURL=pen.js
