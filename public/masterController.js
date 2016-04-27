angular.module('eCommerceApp')
    .controller('masterController', function($scope, apiService, products) {

        $scope.edit = false;

        $scope.products = products.data;

        $scope.getProducts = function(productid) {
            apiService.getProducts().then(function(response) {
                $scope.products = response.data;
            });
        };

        // console.log($scope.products);

        $scope.deleteProduct = function(productid) {
            apiService.deleteProduct(productid).then(function(response) {
                if (response) {
                    $scope.getProducts();
                }
            });
        };

        $scope.editProduct = function(productid) {
            apiService.editProduct(productid).then(function(response) {
                if (response) {
                    $scope.getProducts();
                }
            });
        };

    });
