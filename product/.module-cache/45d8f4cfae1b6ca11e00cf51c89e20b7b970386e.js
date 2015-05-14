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

		onClick2: function (event) {
			var self = this;
			this.props.buttonClick_(self.getState());
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