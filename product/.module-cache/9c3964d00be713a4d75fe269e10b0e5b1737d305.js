var UserLogin = React.createClass({displayName: "UserLogin",
	

	render: function () {
		return (
			React.createElement("div", {className: "user-login-div"}, 
				React.createElement("div", {className: "user-login-form"}, 
					React.createElement("h1", null, "Create account"), 
					React.createElement("form", {onSubmit: this.saveAndContinue}, 
						React.createElement("input", {text: "Email Address", ref: "email", type: "text", 
						defaultValue: this.state.email, validate: this.validateEmail, 
						value: this.state.email, 
						onChange: this.handleEmailInput, 
						errorMessage: "Email is invalid", 
						emptyMessage: "Email can't be empty", 
						errorVisible: this.state.showEmailError})
					)
				)
			)
			);
	}
});




































