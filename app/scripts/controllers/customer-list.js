'use strict';


angular.module('customerClienteApp')
  .controller('CustomerListCtrl', function ($scope,customerSvc) {
  $scope.customers = customerSvc.query();
  
 /*  $scope.deleteCustomer=function(customer){
       var data = {
    'name': 'new name',
    'email': 'newname@email.com',
    'phone':'123124-12431-221',
    'addressline1':'calle1',
    'city':'medallo',
    'state':'antioquia'    
    };
    customerSvc.save(data)
            .$promise
            .then(function (response) { console.log(response); })
            .catch(function (response) { console.log(response); });
      
      
  };*/
    
       
    });
