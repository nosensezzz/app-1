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

		childButtonClicked: function (child , action) {
			switch (action){
				case "login":

					break;
				case "register":
					window.location = '#user/register';
					break;
				default:
					break;
			}
		},

		render: function () {
			var button1_props = {
				myname:'login',
				action:'login',
				childButtonClicked: this.childButtonClicked},
				button2_props ={
					myname: 'register',
					action: 'register',
					childButtonClicked: this.childButtonClicked
				};

			return (
				React.createElement("div", {className: "panel panel-default"}, 
					React.createElement("div", {className: "panel-heading"}, "User List"), 
					React.createElement("div", null, 
						React.createElement(UserLoginButton, React.__spread({},  button1_props)), " ", React.createElement(UserLoginButton, React.__spread({},  button2_props))
					)
				)
			);
		}
	});

	return UserLogin;
});