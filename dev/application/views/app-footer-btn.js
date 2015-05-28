define(function (require) {
	'use strict';

	var FooterButton = React.createClass({
		getInitialState: function () {
			return {

			};
		},

		clicked: function (url) {
			var self = this;
			location.assign(url);
		},

		render: function () {
			var self = this;

			return (
				<div className="app-footer-block" onClick={self.clicked.bind(self , self.props.url)} >
					{self.props.displayName}
				</div>
			);
		}
	});

	return FooterButton;
});