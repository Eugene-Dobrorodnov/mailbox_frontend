'use strict';

/**
 * @ngdoc overview
 * @name mailboxFrontendApp
 * @description
 * # mailboxFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('mailboxFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .run(function($rootScope, $cookieStore, $http) {

    $rootScope.set_auth_headers = function(email, auth_token){
      $http.defaults.headers.common['X-User-Email'] = email;
      $http.defaults.headers.common['X-User-Token'] = auth_token;
    }

    if($cookieStore.get('current_user')){
      $rootScope.current_user = JSON.parse($cookieStore.get('current_user'));
    }else{
      $rootScope.current_user = null;
    }

    if ($rootScope.current_user) {
      $rootScope.set_auth_headers($rootScope.current_user.email, $rootScope.current_user.authentication_token);
    }
  })
  .constant('Config',{
    HOST:  'http://localhost:3005/api/v1'
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/latters', {
        templateUrl: 'views/latters-list.html',
        controller: 'LatterCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
