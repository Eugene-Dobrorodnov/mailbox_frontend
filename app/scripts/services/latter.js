'use strict';

/**
 * @ngdoc service
 * @name mailboxFrontendApp.Latter
 * @description
 * # Latter
 * Service in the mailboxFrontendApp.
 */
angular.module('mailboxFrontendApp')
  .factory('Latter', function ($http) {
    var resource_url = 'http://localhost:3005/api/v1/latters';
    var self = this;

    self.getLatters = function () {
        return $http.get(resource_url);
    };

    self.getLatter = function (id) {
        return $http.get(resource_url + '/' + id);
    };

    self.sendLatter = function (params) {
        return $http.post(resource_url, params);
    };

    self.deleteLatter = function (id) {
        return $http.delete(resource_url + '/' + id);
    };

    self.getSpam = function (id) {
        return $http.get(resource_url + '/' + id + '/spam');
    };

    return self;
  });
