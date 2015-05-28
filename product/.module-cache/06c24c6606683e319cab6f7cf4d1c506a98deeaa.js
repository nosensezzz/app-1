define(function (require) {
	'use strict';

	var AppFooterReact = React.createClass({displayName: "AppFooterReact",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("nav", {className: "app-footer-div navbar navbar-inverse navbar-fixed-bottom"}, 
					React.createElement("div", {className: "container"}, 
						React.createElement("a", {className: "navbar-brand", href: "/#app-shell"}, "LOGO"), 

						React.createElement("div", {id: "header-navbar", className: "navbar-collapse collapse"}, 
							React.createElement("ul", {className: "nav navbar-nav"}, 
								React.createElement("li", null, React.createElement("a", {href: "/#heroes"}, "Heroes"))
							), 
							React.createElement("ul", {className: "nav navbar-nav pull-right"}, 
								React.createElement("li", null, React.createElement("a", {href: "/#user"}, "User"))
							)
						)
					)
					
				)

			);
		}
	});

	return AppFooterReact;
});