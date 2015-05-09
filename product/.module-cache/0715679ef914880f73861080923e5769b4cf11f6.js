var UserLogin = React.createClass({displayName: "UserLogin",
	getInitialState: function (argument) {
		return {
			email:null,
			password: null,
			confirmPassword: null,
			statesValue: null,
			forbiddenWords: ['username'],
		};
	}  
});