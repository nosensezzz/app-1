define(function (require) {
	'use strict';

	var UserLoginButton = React.createClass({displayName: "UserLoginButton",
		getInitialState: function () {
			return {
				1:1,
			};
		},

		getDefaultProps: function () {
			return {
				defaultText:'default button',
			};
		},

		LoginButtonClick: function (event) {
			var self = this;
			this.props.childButtonClicked(self , 'login');
		},

		RegisterButtonClick: function (event) {
			var self = this;
			this.props.childButtonClicked(self  , 'register');
		},

		render: function () {
			return (
				React.createElement("div", null, 
					React.createElement("button", {onClick: this.LoginButtonClick}, this.props.myname), 
					React.createElement("button", {onClick: this.RegisterButtonClick}, this.props.myname)
				)
			);
		}
	});

	return UserLoginButton;
});