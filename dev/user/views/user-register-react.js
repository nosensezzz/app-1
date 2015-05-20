define(function (require) {
	'use strict';
	// needed module
	var userServiceModule = require('../service/user-service'),
		userService = Object.resolve(userServiceModule),

		userDTOModule = require('../model/user-dto'),
		UserDTO = Object.resolve(userDTOModule);

	// define component here
	var Input = require('./Input');

	var UserRegister = React.createClass({
		componentWillMount: function (argument) {
		},

		componentDidMount: function (argument) {
		},

		componentWillUpdate: function (nextProps , nextState) {

		},

		componentDidUpdate: function (prevProps , prevState) {

		},

		componentWillUnmount: function (argument) {

		},

		getInitialState: function (argument) {
			return {
				name:null,
				email:null,

				password: null,
				passwordValid: false,

				confirmPassword: null,
				confirmPasswordValid: false,

				statesValue: null,
				forbiddenWords: ['username'],

				msgDivClassName: 'hide',
			};
		},

		handlePasswordInput: function (event) {
			var self = this;
			if(event.target.value.length < 6){
				$("#register-invalid-msg-div").html("password minimam length: 6");
				$("#register-invalid-msg-div").show();
				self.setState({
						passwordValid:false,
				});
			} else {
				self.setState({
					passwordValid:true,
				});

				if(self.state.confirmPassword === event.target.value){
					$("#register-invalid-msg-div").hide();
				} else {
					$("#register-invalid-msg-div").html("password not match");
					$("#register-invalid-msg-div").show();
				}
			}

			self.setState({
				password:event.target.value,
			});
		},

		handleConfirmPasswordInput: function (event) {
			var self = this;
			if(self.state.passwordValid !== true){ return false; }
			else {
				if(event.target.value !== self.state.password){
					$("#register-invalid-msg-div").html("password not match");
					$("#register-invalid-msg-div").show();
					self.setState({
						confirmPasswordValid: false,
					});
				} else {
					self.setState({
						confirmPasswordValid:true,
					});

					$("#register-invalid-msg-div").hide();
				}
			}
			self.setState({
				confirmPassword: event.target.value,
			});

		},

		saveAndContinue: function (e) {
			e.preventDefault();
			var self = this,
				userObj = UserDTO.packageUser(self.state);
			if(userObj){
				userService.registerUser(userObj)
				.done(function(data){
					alert('done');
				})
				.fail(function(data){
					alert("error: " + data.responseText);
				});
			} else {
				alert('invalid info.');
			}
		},


		handleEmailInput: function (event) {
			// email validate...


			this.setState({
				email:event.target.value,
			});
		},

		handleNameInput: function (event){
			this.setState({
				name: event.target.value,
			});
		},

		render: function () {
			return (
				<div className="user-register-div">
					<div className="user-register-form">
						<h1>Create account</h1>
						<form onSubmit={this.saveAndContinue}>
							<span>Name </span>
							<input ref="name" type="text" value={this.state.name} onChange={this.handleNameInput} />
							<br/>

							<span>Email </span>
							<input ref="email" type="email" value={this.state.email} onChange={this.handleEmailInput} />
							<br/>

							<span>Pw </span>
							<input type="password" ref="password" 
							value={this.state.password} onChange={this.handlePasswordInput} />
							<br/>

							<span>ConfirmPw </span>
							<input type="password" ref="confirmPassword" onChange={this.handleConfirmPasswordInput} 
							value={this.state.confirmPassword} />
							<br/>

							<div className={this.state.msgDivClassName} id="register-invalid-msg-div" ></div>
							<br/>
							<button type="submit" >Submit</button>
						</form>
					</div>
				</div>
			);
		},
	});

	return UserRegister;
});