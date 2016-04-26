angular.module('eCommerceApp')
  .controller('masterController', function ($scope, apiService, products) {
    // $scope.productData = apiService.getProducts();
    $scope.products = products.data;

    console.log($scope.products);
    });
