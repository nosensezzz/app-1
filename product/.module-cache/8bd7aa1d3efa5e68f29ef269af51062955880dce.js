define(function (require) {
	'use strict';

	var UserLoginButton = React.createClass({displayName: "UserLoginButton",
		getInitialState: function () {
			return {};
		},

		getDefaultProps: function () {
			return {
				defaultText:'default button',
			};
		},

		onClick2: function (event) {
			this.props.buttonClick_(this.getState());
		},

		render: function () {
			return (
				React.createElement("div", null, 
					React.createElement("button", {onClick: this.buttonClick}, this.props.myname)
				)
			);
		}
	});

	return UserLoginButton;
});