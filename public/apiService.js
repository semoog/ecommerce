angular.module('eCommerceApp')
  .service('apiService', function($http) {
    return {

      getProducts: function() {
        // console.log("grabbing data: ", $http.get('/api/products'));
      	return $http.get('/api/products');
      },

      deleteProduct: function(id) {
        // console.log("grabbing data: ", $http.get('/api/products'));
      	return $http.delete('/api/products/' + id);
      }
    };
  });
