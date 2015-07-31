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

    $scope.signup = function(){
      $http.post('http://localhost:3005/api/v1/auth', {user: $scope.signup_credentials}).
      success(function(data, status, headers, config){
        if(data.success){
          $cookieStore.put('current_user', JSON.stringify(data.user));
          $rootScope.set_auth_headers(data.user.email, data.user.authentication_token);
          $rootScope.current_user = data.user;
        }else{
          console.log(data)
        }
      }).
      error(function(error){ console.log(error) });
    }

    $scope.signin = function(){
      $http.post('http://localhost:3005/api/v1/auth/sign_in', {user: $scope.signin_credentials}).
      success(function(data, status, headers, config){
        if(data.success){
          console.log(data)
          $cookieStore.put('current_user', JSON.stringify(data.user));
          $rootScope.set_auth_headers(data.user.email, data.user.authentication_token);
          $rootScope.current_user = data.user;
        }else{

        }
      }).
      error(function(error){
        $scope.signin_credentials.errors = error.message
      });
    }

    $scope.signout = function(){
      $cookieStore.remove('current_user');
      $http.defaults.headers.common['X-User-Email'] = null;
      $http.defaults.headers.common['X-User-Token'] = null;
      $rootScope.current_user = null;
    }
  });
