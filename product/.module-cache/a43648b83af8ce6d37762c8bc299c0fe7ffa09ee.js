define(function (require) {
	'use strict';

	var userServiceModule = require('../service/user-service'),
		userService = Object.resolve(userServiceModule),
		userDTOModule = require('../model/user-dto'),
		UserDTO = Object.resolve(userDTOModule);

	var UserLoginButton = require('./user-login-button-react');

	var UserLogin = React.createClass({displayName: "UserLogin",
		getInitialState: function () {
			return {};
		},

		parentClick: function () {
			console.log(this);
			alert('parentClick');
		},

		render: function () {
			var parentClick = this.parentClick;
			var props = {
				myname:'parent button'
			};
			return (
				React.createElement("div", null, 
					"login panel", 
					React.createElement("div", null, 
						React.createElement(UserLoginButton, React.__spread({},  props))
					)
				)
			);
		}
	});

	return UserLogin;
});