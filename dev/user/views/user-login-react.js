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
				<div className="panel panel-default">
					<div className="panel-heading">
						<h6 className="panel-title">User List</h6>
					</div>
					<div className="panel-body">
						panel body
					</div>
				</div>
				<div>
					<UserLoginButton {...button1_props} /> <UserLoginButton {...button2_props} />
				</div>
			);
		}
	});

	return UserLogin;
});