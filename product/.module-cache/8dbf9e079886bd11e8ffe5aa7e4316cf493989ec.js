define(function (require) {
	'use strict';
	// define component here
	var Input = require('./Input');

	var UserLogin = React.createClass({displayName: "UserLogin",
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
			console.log(this.getDOMNode);
			this.setState({
				confirmPassword: event.target.value,
			});
		},

		saveAndContinue: function (e) {
			e.preventDefault();
			alert('save');
		},


		handleEmailInput: function (event) {
			this.setState({
				email:event.target.value,
			});
		},

		render: function () {
			return (
				React.createElement("div", {className: "user-login-div"}, 
					React.createElement("div", {className: "user-login-form"}, 
						React.createElement("h1", null, "Create account"), 
						React.createElement("form", {onSubmit: this.saveAndContinue}, 
							React.createElement("input", {ref: "email", type: "email", value: this.state.email, onChange: this.handleEmailInput}), 
							React.createElement("br", null), 

							React.createElement("input", {type: "password", ref: "password", 
							value: this.state.password, onChange: this.handlePasswordInput}), 
							React.createElement("br", null), 

							React.createElement("input", {type: "password", ref: "confirmPassword", onChange: this.handleConfirmPasswordInput, 
							value: this.state.confirmPassword}), 
							React.createElement("br", null)


						)
					)
				)
				);
		}
	});

	return UserLogin;
});

	





































