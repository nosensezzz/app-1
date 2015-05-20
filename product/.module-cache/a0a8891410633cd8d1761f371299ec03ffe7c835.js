define(function (require) {
	'use strict';

	var AppHeaderRegion = require('./app-header-react'),
		AppContentRegion = require('./app-content-react');

	var AppRegion = React.createClass({displayName: "AppRegion",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("div", {className: "app-div"}, 
					React.createElement(AppHeaderRegion, null), 
					React.createElement(AppContentRegion, null), 
					"jjjj"
				)
			);
		}
	});

	return AppRegion;
});