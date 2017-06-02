'use strict';

/**
 * @ngdoc function
 * @name customerClienteApp.controller:NewCustomerCtrl
 * @description
 * # NewCustomerCtrl
 * Controller of the customerClienteApp
 */
angular.module('customerClienteApp')
  .controller('NewCustomerCtrl', function ($scope, customerSvc) {
      $scope.deleteCustomer=function(customer){
          customerSvc.delete(customer, function(){console.log("Eliminado");});
          
      };
    
  });
