'use strict';

/**
 * @ngdoc service
 * @name mailboxFrontendApp.auth
 * @description
 * # auth
 * Service in the mailboxFrontendApp.
 */
angular.module('mailboxFrontendApp')
  .service('Auth', function ($resource) {
    return $resource('http://localhost:3005/api/v1/auth', {}, {
      query: {method:'POST', params:{user: null}, isArray:true}
    });
  });
