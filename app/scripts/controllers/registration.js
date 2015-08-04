'use strict';

/**
 * @ngdoc function
 * @name mailboxFrontendApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the mailboxFrontendApp
 */
angular.module('mailboxFrontendApp')
  .controller('RegistrationCtrl', function ($rootScope, $scope, $http, $cookieStore, Auth) {

    $scope.signUp = function(){
      Auth.signUp($scope.signup_credentials).
      success(function(data, status, headers, config) {
        if(data.success){
          Auth.init_current_user(data.user);
        }else{
          console.log(data)
        }
      }).
      error(function(error){ console.log(error) });
    };

    $scope.signIn = function(){
      Auth.signIn($scope.signin_credentials).
      success(function(data, status, headers, config) {
        if(data.success){
          Auth.init_current_user(data.user);
        }else{

        }
      }).
      error(function(error){
        $scope.signin_credentials.errors = error.message
      });
    };

    $scope.signOut = function() {
      Auth.signOut();
    };

  });
