define(function (require) {
	'use strict';

	var userServiceModule = require('../service/user-service'),
		userService = Object.resolve(userServiceModule),
		userDTOModule = require('../model/user-dto'),
		UserDTO = Object.resolve(userDTOModule);

	var UserLoginButton = require('./user-login-button-react');

	var UserLogin = React.createClass({
		getInitialState: function () {
			return {};
		},

		childButtonClicked: function (child) {
			console.log(child);
		},

		render: function () {
			var props = {
				myname:'login button',
				childButtonClicked: this.childButtonClicked,
			};
			return (
				<div>
					login panel
					<div>
						<UserLoginButton {...props} />
					</div>
				</div>
			);
		}
	});

	return UserLogin;
});