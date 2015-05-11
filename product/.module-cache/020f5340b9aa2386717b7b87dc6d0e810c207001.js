define(function (require) {
	'use strict';
	// define component here
	var Input = require('./Input');

	var UserLogin = React.createClass({displayName: "UserLogin",
		componentWillMount: function (argument) {
		},

		componentDidMount: function (argument) {
		},

		componentWillUpdate: function (nextProps) {

		},

		componentWillUnmount: function (argument) {

		},

		getInitialState: function (argument) {
			return {
				email:null,
				password: null,
				confirmPassword: null,
				statesValue: null,
				forbiddenWords: ['username'],
			};
		},

		handlePasswordInput: function (event) {

		},

		handleConfirmPasswordInput: function (event) {
			this.setState({
				confirmPassword: event.target.value,
			});
		},

		saveAndContinue: function (e) {
			e.preventDefault();

			var canProceed = this.validateEmail(this.state.email)
				&& !_.isEmpty(this.state.statesValue)
				&& this.refs.password.isValid()
				&& this.refs.passwordConfirm.isValid();

			if(canProceed){
				var data = {
					email: this.state.email,
					state: this.state.statesValue
				}
				alert('thanks');

			} else {
				this.refs.email.isValid();
				this.refs.state.isValid();
				this.refs.password.isValid();
				this.refs.passwordConfirm.isValid();

			}
		},

		isConfirmedPassword: function(event){
			return (event === this.state.password);
		},

		handleEmailInput: function (event) {
			this.setState({
				email:event.target.value,
			});
		},

		validateEmail: function (event) {
			// regular
		    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(event);
		},

		isEmpty: function (value) {
			var a = _.isEmpty(value);
			return a;
		},

		updateStatesValue: function (value) {
			this.setState({
				statesValue: value,
			});
		},

		render: function () {
			return (
				React.createElement("div", {className: "user-login-div"}, 
					React.createElement("div", {className: "user-login-form"}, 
						React.createElement("h1", null, "Create account"), 
						React.createElement("form", {onSubmit: this.saveAndContinue}, 
							React.createElement("input", {ref: "email", type: "email", 
							value: this.state.email, 
							onChange: this.handleEmailInput}), 

							React.createElement("input", {type: "password", ref: "password", 
							value: this.state.password, onChange: this.handlePasswordInput}), 

							React.createElement("input", {type: "password", ref: "confirmPassword", onChange: this.handleConfirmPasswordInput, 
							value: this.state.confirmPassword})
						)
					)
				)
				);
		}
	});

	return UserLogin;
});

	





































