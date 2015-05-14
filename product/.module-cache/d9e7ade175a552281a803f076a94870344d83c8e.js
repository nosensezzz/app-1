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

		parentClick: function (a1 , a2) {
			console.log(a1);
			console.log(a2);
			alert('parentClick');
		},

		render: function () {
			var props = {
				myname:'parent button',
				buttonClick_: this.buttonClick_,
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