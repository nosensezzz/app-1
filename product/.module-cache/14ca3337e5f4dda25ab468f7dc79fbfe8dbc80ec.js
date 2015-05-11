define(function (require) {
	'use strict';

	var UserService = {

	};

	UserService.prototype.registerUser = function(user) {
		var dfd = $.Deferred();

		$.post({
			dataType: "json",
			url: "http://localhost:3001/api/users",
			success: function (data) {
				dfd.resolve(data);
			}
		});
	};

	return UserService;
});