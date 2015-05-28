define(function (require) {
	'use strict';

	var FooterButton = require('./app-footer-btn');

	var AppFooterReact = React.createClass({displayName: "AppFooterReact",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("div", {className: "app-footer-panel"}, 
					React.createElement("div", {className: ""}, 
						React.createElement(FooterButton, {displayName: "heroes", url: "/#heroes"}), 
						React.createElement(FooterButton, {displayName: "user", url: "/#user"}), 
						React.createElement(FooterButton, {displayName: "heroes", url: "/#heroes"}), 
						React.createElement(FooterButton, {displayName: "heroes", url: "/#heroes"}), 
						React.createElement(FooterButton, {displayName: "heroes", url: "/#heroes"})	
					)
					
				)

			);
		}
	});

	return AppFooterReact;
});