'use strict';

/**
 * @ngdoc service
 * @name mailboxFrontendApp.auth
 * @description
 * # auth
 * Service in the mailboxFrontendApp.
 */
angular.module('mailboxFrontendApp')
  .factory('Auth', function ($http, $rootScope, $cookieStore) {
    var resource_url = 'http://localhost:3005/api/v1/auth';
    var self = this;

    self.signUp = function (user_params) {
        return $http.post(resource_url, {user: user_params});
    };

    self.signIn = function (user_params) {
        return $http.post(resource_url + '/sign_in', {user: user_params});
    };

    self.signOut = function() {
      $cookieStore.remove('current_user');
      $http.defaults.headers.common['X-User-Email'] = null;
      $http.defaults.headers.common['X-User-Token'] = null;
      $rootScope.current_user = null;
    };

    self.init_current_user = function(user) {
      $cookieStore.put('current_user', JSON.stringify(user));
      $rootScope.set_auth_headers(user.email, user.authentication_token);
      $rootScope.current_user = user;
    };

    return self;
  });
