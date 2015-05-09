var UserLogin = React.createClass({displayName: "UserLogin",
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

});