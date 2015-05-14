define(function (require) {
	'use strict';

	var UserLoginButton = require('./user-login-button-react');

	var UserLogin = React.createClass({displayName: "UserLogin",
		getInitialState: function () {
			return {};
		},

		render: function () {
			return (
				React.createElement("div", null, 
					React.createElement("button", null)
				)
			);
		}
	});

	return UserLogin;
});