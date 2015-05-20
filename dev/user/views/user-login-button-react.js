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
				<div className="row-fluid">
					<span className="span6">
						<button type="button" className="btn btn-default full-width" onClick={this.buttonClick}>{this.props.myname}</button>
					</span>
				</div>
			);
		}
	});

	return UserLoginButton;
});