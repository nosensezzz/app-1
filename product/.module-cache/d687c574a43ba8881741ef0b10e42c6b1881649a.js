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
					React.createElement("div", {className: "container"}), 
					React.createElement("a", {className: "navbar-brand", href: "/#"}, "LOGO"), 

					React.createElement("div", {id: "header-navbar", className: "navbar-collapse collapse"}, 
						React.createElement("ul", null, 
							React.createElement("li", null, React.createElement("a", null, "123"))
						)
					)
				)

			);
		}
	});

	return AppHeaderRegion;
});