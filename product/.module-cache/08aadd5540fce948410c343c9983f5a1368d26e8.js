define(function (require) {
	'use strict';

	var AppHeaderRegion = React.createClass({displayName: "AppHeaderRegion",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("nav", {className: "app-header-div navbar navbar-inverse navbar-fixed-top"}, 
					React.createElement("div", {className: "container"}, 
						React.createElement("a", {className: "navbar-brand", href: "/#app-shell"}, "LOGO"), 

						React.createElement("div", {id: "header-navbar", className: "navbar-collapse collapse"}, 
							React.createElement("ul", {className: "nav navbar-nav"}, 
								React.createElement("li", null, React.createElement("a", {href: "/#app-shell"}, "Heroes"))
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

	return AppHeaderRegion;
});