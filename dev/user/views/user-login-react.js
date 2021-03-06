define(function (require) {
	'use strict';

	var userServiceModule = require('../service/user-service'),
		userService = Object.resolve(userServiceModule),
		userDTOModule = require('../model/user-dto'),
		UserDTO = Object.resolve(userDTOModule);

	var UserLoginButton = require('./user-login-button-react');

	var UserLogin = React.createClass({
		getInitialState: function () {
			return {
				email: null,
				password: null,
				userFound: false,
				user: null,
				displayEmail: null,
				displayName: null
			};
		},

		childButtonClicked: function (child , action) {
			var self =this;
			switch (action){
				case "login":
					userService.loginUser({
						email: self.state.email,
						password: self.state.password,
					})
					.done(function (callback) {
						console.log(callback);
						if(callback.status === 200){
							self.setState({
								userFound: true,
								user: callback,
								displayName: callback.name,
								displayEmail: callback.email,
							});
							$("#user-display-panel-if-found").show();
							$("#user-display-panel-msg").hide();
						} else if(callback.status === 405){

							self.setState({userFound: false});
							$("#user-display-panel-msg").html("wrong password");
							$("#user-display-panel-msg").show();
							$("#user-display-panel-if-found").hide();
						} else if(callback.status === 404){
							self.setState({userFound: false});
							$("#user-display-panel-msg").html("no such user");
							$("#user-display-panel-msg").show();
							$("#user-display-panel-if-found").hide();
						}
					})
					.fail(function (callback) {
						console.log(callback);
					});
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

			var StyleDefaultHide = {
					display: 'none'
				};

			return (
				<div id="">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h6 className="panel-title">User List</h6>
						</div>

						<div className="panel-body">
							<table className="table" id="user-display-panel-if-found" style={StyleDefaultHide}>
								<tr>
									<th>#</th>
									<th>Email</th>
									<th>Name</th>
								</tr>

								<tr>
									<th></th>
									<th>{this.state.displayEmail}</th>
									<th>{this.state.displayName}</th>
								</tr>
							</table>
							<div style={StyleDefaultHide} id="user-display-panel-msg"></div>
						</div>
					</div>

					<form onSubmit={this.userLogin} role="form">
							<div className="form-group">
								<label for="email">Email:</label>
								<input ref="email" type="email" value={this.state.email} onChange={this.handleEmailInput} className="form-control" />
							</div>

							<div className="form-group">
								<label for="password">Password:</label>
								<input type="password" ref="password" value={this.state.password} onChange={this.handlePasswordInput} className="form-control" />
							</div>
						</form>
					<div>
						<UserLoginButton {...button1_props} /> <UserLoginButton {...button2_props} />
					</div>
				</div>
			);
		}
	});

	return UserLogin;
});