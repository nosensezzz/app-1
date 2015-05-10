var UserLogin = React.createClass({displayName: "UserLogin",
	componentWillMount: function (argument) {
		alert('before');
	},

	componentDidMount: function (argument) {
		alert('after');
	},

	componentWillReceiveProps: function (nextProps) {
		alert('mid');
		console.log(this.props);
		console.log(nextProps);
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
		if(!_.isEmpty(this.state.confirmPassword)){
			this.refs.passwordConfirm.isValid();
		}
		this.refs.passwordConfirm.hideError();
		this.setState({
			password: event.target.value,
		});
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
		console.log(this);
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
						React.createElement("input", {text: "Email Address", ref: "email", type: "text", 
						defaultValue: this.state.email, validate: this.validateEmail, 
						value: this.state.email, 
						onChange: this.handleEmailInput, 
						errorMessage: "Email is invalid", 
						emptyMessage: "Email can't be empty", 
						errorVisible: this.state.showEmailError}), 

						React.createElement("input", {text: "password", type: "password", ref: "password", validator: "true", 
						minCharacters: "6", requireCapitals: "1", requireNumbers: "1", 
						forbiddenWords: this.state.forbiddenWords, value: this.state.password, 
						emptyMessage: "password is invalid", onChange: this.handlePasswordInput}), 

						React.createElement("input", {text: "confirm password", ref: "passwordConfirm", type: "password", 
						validate: this.isConfirmedPassword, value: this.state.confirmPassword, 
						onChange: this.handleConfirmPasswordInput, 
						emptyMessage: "please confirm your password", errorMessage: "Not matched"})
					)
				)
			)
			);
	}
});




































