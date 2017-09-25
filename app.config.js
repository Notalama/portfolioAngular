'use strict';

angular.
  module('portfolioApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<portfolio-header></portfolio-header>'
        }).
        when('/forms', {
          template: '<forms></forms>'
        }).
        when('/navigation', {
          template: '<navigation></navigation>'
        }).
        otherwise('/');
    }
  ]);
