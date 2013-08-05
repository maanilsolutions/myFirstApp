// Main App JAVASCRIPT File
// 'use strict';

angular.module('contactapp', ['ngResource']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	  when('/contacts', {template: 'assets/app/partials/contactListing.html', controller: ContactListCtrl}).
  	  when('/contacts/new', {template: 'assets/app/partials/newContact.html', controller: ContactListCtrl}). 
      when('/dashboard', {template: 'assets/app/partials/dashboard.html', controller: DashboardCtrl}).
      otherwise({redirectTo: '/dashboard'});
}]);