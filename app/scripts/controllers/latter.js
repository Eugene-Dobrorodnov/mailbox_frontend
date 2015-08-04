'use strict';

/**
 * @ngdoc function
 * @name mailboxFrontendApp.controller:LatterCtrl
 * @description
 * # LatterCtrl
 * Controller of the mailboxFrontendApp
 */
angular.module('mailboxFrontendApp')
  .controller('LatterCtrl', function ($scope, Latter) {
    $scope.status;
    $scope.latters;
    $scope.latter;

    getLatters();

    function getLatters() {
      Latter.getLatters()
        .success(function (data) {
          console.log(data)
          $scope.latters = data.entries;
        })
        .error(function (error) {
          $scope.status = 'Unable to load latters: ' + error.message;
        });
    }

    $scope.getLatter = function(id) {
      Latter.getLatter(id)
      .success(function (data) {
          $scope.latter = data;
      })
      .error(function (error) {
          $scope.status = 'Error retrieving latter! ' + error.message;
      });
    };

    $scope.getSpam = function () {
        Latter.getSpam()
        .success(function (data) {
            $scope.latters = data;
        })
        .error(function (error) {
            $scope.status = 'Unable to load spam: ' + error.message;
        });
    };

  });
