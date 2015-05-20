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
					React.createElement("a", {className: "navbar-brand", href: "/#"}, "LOGO")
					
				)

			);
		}
	});

	return AppHeaderRegion;
});