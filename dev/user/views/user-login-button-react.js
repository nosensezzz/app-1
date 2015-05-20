define(function (require) {
	'use strict';

	var UserLoginButton = React.createClass({
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
				<div>
					<button onClick={this.buttonClick}>{this.props.myname}</button>
				</div>
			);
		}
	});

	return UserLoginButton;
});