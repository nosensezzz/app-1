define(function (require) {
	'use strict';

	BlockBtn = require('./views/app-footer-btn');

	var AppFooterReact = React.createClass({displayName: "AppFooterReact",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("div", {className: "app-footer-panel"}, 
					React.createElement("div", {className: ""}, 
						React.createElement("div", {className: "app-footer-block"}

						), 
						React.createElement("div", {className: "app-footer-block"}

						), 
						React.createElement("div", {className: "app-footer-block"}

						), 
						React.createElement("a", {className: "navbar-brand", href: "/#app-shell"}, "LOGO"), 

					
						React.createElement("a", {href: "/#heroes"}, "Heroes"), 
						
							
						React.createElement("a", {href: "/#user"}, "User")
					
						
					)
					
				)

			);
		}
	});

	return AppFooterReact;
});