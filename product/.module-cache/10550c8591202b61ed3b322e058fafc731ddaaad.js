define(function (require) {
	'use strict';

	function UserService (){

	};

	UserService.prototype.registerUser = function(user) {
		var dfd = $.Deferred();

		$.ajax({
			type: "POST",
			dataType: "json",
			data:user,
			url: "http://localhost:3001/api/user",
			success: function (data) {
				console.log(data);
			},
			error: function (data) {
				dfd.reject(data);
			}
		});

		return dfd.promise();
	};

	return UserService;
});