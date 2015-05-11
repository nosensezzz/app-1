define(function (require) {
	'use strict';

	function UserDto (){

	};

	UserDto.prototype.packageUser = function(data) {
		var self = this;
		console.log(data);
	
	};

	return UserDto;
});