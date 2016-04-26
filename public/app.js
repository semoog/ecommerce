angular.module('eCommerceApp', ['ui.router'])
.config(function( $stateProvider, $urlRouterProvider ) {

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: './views/home.html',
    controller: 'masterController',
    resolve: {
      products: function( apiService ) {
        return apiService.getProducts();
      }
    }
  })
  .state('admin', {
    url: '/admin',
    templateUrl: './views/admin.html',
    controller: 'masterController',
    resolve: {
      products: function( apiService ) {
        return apiService.getProducts();
      }
    }
  });

  $urlRouterProvider.otherwise('/home');

});
