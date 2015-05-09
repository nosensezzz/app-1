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
	}
});