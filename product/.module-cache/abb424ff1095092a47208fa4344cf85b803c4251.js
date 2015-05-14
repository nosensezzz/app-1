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

		render: function () {
			return (
				React.createElement("div", null, 
					React.createElement("button", {onClick: this.props.onClick2}, this.props.myname)
				)
			);
		}
	});

	return UserLoginButton;
});