'use strict';

function ContactListCtrl($scope, $http, $location, $routeParams, Contacts){
	$scope.contacts = Contacts.index();
	// New
	$scope.addContact = function(){
		var newContact = {
							first_name:$scope.newFirstName,
							last_name:$scope.newLastName,
							mobile_number:$scope.newMobileNumber
						};
		var nc = new Contacts({ contact: newContact }); // api User

		nc.$create(function(){
			$scope.contacts.push(nc);
			// now that the contact is saved, clear the form data
			$scope.newFirstName = "";
	 		$scope.newLastName = "";
	 		$scope.newMobileNumber = "";

	 		// redirect to caontacts page
	 		$location.path('/contacts');

		})
	}

	// $scope.contact = Contacts.get( {contact_id: $routeParams.contact_id} );
	$scope.contact = "";

	$scope.getContact = function(){
		$scope.contact = this.contact;
	}

	$scope.removeContact = function() {
    	$scope.contact.$destroy();
        $('#deleteModal').modal('hide');
    };
}

ContactListCtrl.$inject = ['$scope', '$http', '$location', '$routeParams', 'Contacts'];


function ContactDetailsCtrl($scope, $http, $location, $routeParams, Contacts){
	// Edit
	$scope.contact = Contacts.get( {contact_id: $routeParams.contact_id} );


	$scope.saveContact = function(){
		var updateContact = {
								first_name:$scope.editFirstName,
								last_name:$scope.editLastName,
								mobile_number:$scope.editMobileNumber
							};
		

		$.ajax({
			url: "/contacts/" + $routeParams.contact_id,
			dataType: "json",
			type: "POST",
		   	processData: false,
		   	contentType: "application/json",
		   	data: "{\"contact\"" + ":" + 
		   			"{" +
		   			
		   			"\"first_name\"" + ":" + JSON.stringify($("#edit_contact_first_name").val()) + "," +
		   			"\"last_name\"" + ":" + JSON.stringify($("#edit_contact_last_name").val()) + "," +
					"\"mobile_number\"" + ":" + JSON.stringify($("#edit_contact_mobile_number").val()) + "" +
		   			
		   			"}}" ,
		   		//data: "{\"contact\":{\"first_name\":\"Taco\"}}",
			beforeSend: function(xhr){
						xhr.setRequestHeader("X-Http-Method-Override", "PUT");
			},
			success: function(data){
			}
		});


		// redirect to caontacts page
	 	$location.path('/contacts');
   		
	}
}

ContactDetailsCtrl.$inject = ['$scope', '$http', '$location', '$routeParams', 'Contacts'];

// Block Controller 
function BlockCtrl($scope, $http, $location, $routeParams, Blocks){

	$scope.blocks = Blocks.index();

	// New
	$scope.addBlock = function(){

		alert("asdasdasd");
		var newBlock = {
							block_name:$scope.newBlockName
						};

		var nb = new Blocks({ block: newBlock }); // api User


		nb.$create(function(){
			$scope.blocks.push(nb);
			// now that the contact is saved, clear the form data
			$scope.newBlockName = "";


			alert("asdasdasdasdasd Created");
	 		// redirect to caontacts page
	 		$location.path('/blocks');


		})
	}

	// $scope.contact = Contacts.get( {contact_id: $routeParams.contact_id} );
	$scope.block = "";

	$scope.getBlock = function(){
		$scope.block = this.block;
	}

	$scope.removeBlock = function() {
    	$scope.block.$destroy();
        $('#deleteModal').modal('hide');
    };

};

BlockCtrl.$inject = ['$scope', '$http', '$location', '$routeParams', 'Blocks'];