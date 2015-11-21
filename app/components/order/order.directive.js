(function() {
  angular
    .module("app")
    .directive("orderDetails", OrderDetails);

  function OrderDetails() {

    var directive = {
      link: link,
      templateUrl: 'order-details.html',
      restrict: "E",
      scope : {} // directive gets new scope
    };

    return directive;

    function link(scope, element, attrs) {
      scope.order = attrs.order;
    }
  }
})();
