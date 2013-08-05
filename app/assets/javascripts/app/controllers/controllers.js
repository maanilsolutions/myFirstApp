'use strict';

function ContactListCtrl($scope, $http, $location, $routeParams, Contacts){
	$scope.contacts = Contacts.index();
	
}

ContactListCtrl.$inject = ['$scope', '$http', '$location', '$routeParams', 'Contacts'];