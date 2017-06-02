'use strict';

describe('Controller: NewCustomerCtrl', function () {

  // load the controller's module
  beforeEach(module('customerClienteApp'));

  var NewCustomerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCustomerCtrl = $controller('NewCustomerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NewCustomerCtrl.awesomeThings.length).toBe(3);
  });
});
