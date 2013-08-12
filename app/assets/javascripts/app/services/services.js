

var servicesModule = angular.module('contactapp');
//within project---------------------------------------------------------------------------------------------------------
	servicesModule.factory('Contacts', function($resource) {		
		
		var ContactsService = $resource('/contacts/:contact_id', {contact_id: '@id'}, {
			'create'  : { method: 'POST' },
			'index'   : { method: 'GET', isArray: true },			
			'update'  : { method: 'PUT' },
			'destroy' : { method: 'DELETE' }
		});
		return ContactsService;
});


//within project---------------------------------------------------------------------------------------------------------
	servicesModule.factory('Blocks', function($resource) {		
		
		var BlocksService = $resource('/blocks/:block_id', {block_id: '@id'}, {
			'create'  : { method: 'POST' },
			'index'   : { method: 'GET', isArray: true },			
			'update'  : { method: 'PUT' },
			'destroy' : { method: 'DELETE' }
		});
		return BlocksService;
});



// 
// servicesModule.factory('User', function($resource) {		
		// alert('in servies');
		// var ContactsService = $resource('/users/:user_id', {user_id: '@id'}, {
			// 'create'  : { method: 'POST' },
			// 'index'   : { method: 'GET', isArray: true },			
			// 'update'  : { method: 'PUT' },
			// 'destroy' : { method: 'DELETE' }
		// });
		// return ContactsService;
// });