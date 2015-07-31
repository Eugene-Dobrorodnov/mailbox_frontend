'use strict';

describe('Controller: LatterCtrl', function () {

  // load the controller's module
  beforeEach(module('mailboxFrontendApp'));

  var LatterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LatterCtrl = $controller('LatterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LatterCtrl.awesomeThings.length).toBe(3);
  });
});
