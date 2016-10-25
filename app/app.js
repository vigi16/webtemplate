'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStores', [
  'ngRoute',
  'templateStores.templates',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
