'use strict';

function DashboardCtrl($scope, $http, $location, $routeParams, User){
	$scope.users = User.query();
};

DashboardCtrl.$inject = ['$scope', '$http', '$location', '$routeParams', 'User'];