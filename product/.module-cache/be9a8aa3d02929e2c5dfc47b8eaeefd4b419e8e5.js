define(function (require) {
	'use strict';

	function UserDto (){

	};

	UserDto.prototype.packageUser = function(data) { // validation && package all handle here
		var self = this;
		//console.log(data);
		if(data.passwordValid && data.confirmPasswordValid){
			return {
				name: data.name,
				email: data.email,
				password: data.password
			};
		} else {
			return false;
		}
	
	};

	return UserDto;
});