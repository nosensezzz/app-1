define(function (require) {
	'use strict';

	var AppFooterReact = React.createClass({displayName: "AppFooterReact",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("nav", {className: "app-footer-panel"}, 
					React.createElement("div", {className: ""}, 
						React.createElement("div", {className: "app-footer-button"}), 
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