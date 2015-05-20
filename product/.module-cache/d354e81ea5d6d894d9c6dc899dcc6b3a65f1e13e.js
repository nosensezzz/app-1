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

		buttonClick: function (event) {
			var self = this;
			this.props.childButtonClicked(self, self.props.action);
		},

		render: function () {
			return (
				React.createElement("div", null, 
					React.createElement("button", {type: "button", className: "btn btn-default", onClick: this.buttonClick}, this.props.myname)
				)
			);
		}
	});

	return UserLoginButton;
});