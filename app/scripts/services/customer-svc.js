'use strict';

/**
 * @ngdoc service
 * @name customerClienteApp.customerSvc
 * @description
 * # customerSvc
 * Factory in the customerClienteApp.
 */
angular.module('customerServices', ['ngResource'])
  .factory('customerSvc', ['$resource',
        function($resource){
            return $resource(
                    'http://localhost:9090/customer1/webresources/com.udea.customer1.entity.customer/:customerId:id', {},
             { update:{method:'PUT',params:{id:'@customerId'}}});
        }]);
