// Main App JAVASCRIPT File
// 'use strict';

angular.module('contactapp', ['ngResource']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  	  when('/contacts', {template: 'assets/app/partials/contactListing.html', controller: ContactListCtrl}).
  	  when('/contacts/new', {template: 'assets/app/partials/newContact.html', controller: ContactListCtrl}).
  	  when('/contacts/edit/:contact_id', {template: 'assets/app/partials/editContact.html', controller: ContactDetailsCtrl}). 
      when('/dashboard', {template: 'assets/app/partials/dashboard.html.erb', controller: DashboardCtrl}).
      when('/blocks', {template: 'assets/app/partials/blocks.html', controller: BlockCtrl}).
      when('/blocks/new', {template: 'assets/app/partials/newBlock.html', controller: BlockCtrl}).

      otherwise({redirectTo: '/dashboard'});
}]);