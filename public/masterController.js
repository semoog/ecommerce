angular.module('eCommerceApp')
    .controller('masterController', function($scope, apiService, products) {

        // SHOW HIDE EDITOR

        $scope.showEdit = [];
        $scope.showEditor = [];

        $scope.refreshList = function () {
          apiService.getProducts().then(function(response) {
              $scope.products = response.data;
              for (var i = 0; i < response.data.length; i++) {
                if ($scope.showEdit[i] === undefined) {
                  $scope.showEdit[i] = true;
                }
                if ($scope.showEditor[i] === undefined) {
                  $scope.showEditor[i] = false;
                }
              }
          });

        };

        // MAIN

        $scope.products = products.data;
        // $scope.refreshList();

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

        $scope.editProduct = function(id, edits) {
            apiService.editProduct(id, edits).then(function(response) {
                if (response) {
                    $scope.getProducts();
                }
            });
        };

    });
