define(function (require) {
	'use strict';

	var UserService = {

	};

	UserService.prototype.registerUser = function(user) {
		$.post({
			dataType: "json",
			url: "http://localhost:3001/api/users",
			success: function (data) {
				console.log(data);
			}
		});
	};

	return UserService;
});