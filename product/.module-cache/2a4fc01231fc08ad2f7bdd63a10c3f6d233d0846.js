define(function (require) {
	'use strict';

	require('./app-header-react');

	var AppRegion = React.createClass({displayName: "AppRegion",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("div", {className: "app-header-div navbar navbar-inverse navbar-fixed-top"}, 
					"header"
				)
			);
		}
	});

	return AppHeaderRegion;
});