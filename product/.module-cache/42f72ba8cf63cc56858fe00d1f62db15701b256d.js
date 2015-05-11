define(function (require) {
	'use strict';

	function UserService (){

	};

	UserService.prototype.registerUser = function(user) {
		var dfd = $.Deferred();

		$.post({
			dataType: "json",
			url: "http://localhost:3001/api/user",
			success: function (data) {
				dfd.resolve(data);
			}
		});

		return dfd.promise();
	};

	return UserService;
});