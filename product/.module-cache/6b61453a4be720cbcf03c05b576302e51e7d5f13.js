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
					React.createElement("button", null, this.props.myname)
				)
			);
		}
	});

	return UserLoginButton;
});