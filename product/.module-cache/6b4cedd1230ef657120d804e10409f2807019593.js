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
					"login panel", 
					React.createElement("div", null, 
						"buttons"
					)
				)
			);
		}
	});

	return UserLogin;
});