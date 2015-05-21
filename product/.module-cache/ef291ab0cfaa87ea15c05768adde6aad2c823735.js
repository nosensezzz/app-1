define(function (require) {
	'use strict';

	var userServiceModule = require('../service/user-service'),
		userService = Object.resolve(userServiceModule),
		userDTOModule = require('../model/user-dto'),
		UserDTO = Object.resolve(userDTOModule);

	var UserLoginButton = require('./user-login-button-react');

	var UserLogin = React.createClass({displayName: "UserLogin",
		getInitialState: function () {
			return {
				email: null,
				password: null,
			};
		},

		childButtonClicked: function (child , action) {
			var self =this;
			switch (action){
				case "login":
					console.log(self.state.email);
					console.log(self.state.password);
					break;
				case "register":
					window.location = '#user/register';
					break;
				default:
					break;
			}
		},

		handleEmailInput: function (event) {
			var self = this;
			self.setState({
				email: event.target.value,
			});
		},

		handlePasswordInput: function (event) {
			var self = this;
			self.setState({
				password: event.target.value,
			});
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
				React.createElement("div", {id: ""}, 
					React.createElement("div", {className: "panel panel-default"}, 
						React.createElement("div", {className: "panel-heading"}, 
							React.createElement("h6", {className: "panel-title"}, "User List")
						), 

						React.createElement("div", {className: "panel-body"}, 
							"panel body"
						)
					), 

					React.createElement("form", {onSubmit: this.userLogin, role: "form"}, 
							React.createElement("div", {className: "form-group"}, 
								React.createElement("label", {for: "email"}, "Email:"), 
								React.createElement("input", {ref: "email", type: "email", value: this.state.email, onChange: this.handleEmailInput, className: "form-control"})
							), 

							React.createElement("div", {className: "form-group"}, 
								React.createElement("label", {for: "password"}, "Password:"), 
								React.createElement("input", {type: "password", ref: "password", value: this.state.password, onChange: this.handlePasswordInput, className: "form-control"})
							)
						), 
					React.createElement("div", null, 
						React.createElement(UserLoginButton, React.__spread({},  button1_props)), " ", React.createElement(UserLoginButton, React.__spread({},  button2_props))
					)
				)
			);
		}
	});

	return UserLogin;
});