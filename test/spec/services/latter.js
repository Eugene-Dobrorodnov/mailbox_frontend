'use strict';

describe('Service: Latter', function () {

  // load the service's module
  beforeEach(module('mailboxFrontendApp'));

  // instantiate service
  var Latter;
  beforeEach(inject(function (_Latter_) {
    Latter = _Latter_;
  }));

  it('should do something', function () {
    expect(!!Latter).toBe(true);
  });

});
