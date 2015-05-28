define(function (require) {
	'use strict';

	FooterButton = require('./views/app-footer-btn');

	var FooterButton = React.createClass({displayName: "FooterButton",
		getInitialState: function () {
			return {

			};
		},

		render: function () {
			var self = this;

			return (
				React.createElement("div", {className: "app-footer-block"}, 
					self.props.displayName
				)
			);
		}
	});

	return FooterButton;
});