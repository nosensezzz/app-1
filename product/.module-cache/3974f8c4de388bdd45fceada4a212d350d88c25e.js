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
			var text = '11';
			this.props.onClick2(this.props.myname , text);
		},

		render: function () {
			return (
				React.createElement("div", null, 
					React.createElement("button", {onClick: this.onClick2}, this.props.myname)
				)
			);
		}
	});

	return UserLoginButton;
});