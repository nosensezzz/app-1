define(function (require) {
	'use strict';

	var AppHeaderRegion = React.createClass({displayName: "AppHeaderRegion",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("div", {className: "app-header-div navbar navbar-inverse navbar-fixed-top"}, 
					React.createElement("a", {className: "navbar-brand", href: "/#"}, "LOGO"), 

					React.createElement("ul", {className: "nav navbar-nav"}, 
						React.createElement("li", null, "User")
					)
				)
			);
		}
	});

	return AppHeaderRegion;
});