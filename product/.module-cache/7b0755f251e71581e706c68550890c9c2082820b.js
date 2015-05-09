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

	handlePasswordInput: function (argument) {
		if(!_.isEmpty(this.state.confirmPassword)){
			this.refs.passwordConfirm.isValid();
		}
		this.refs.passwordConfirm.hideError();
		this.setState({
			password: event.target.value,
		});
	}
});