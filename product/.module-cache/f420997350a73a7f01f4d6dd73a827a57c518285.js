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
				React.createElement("div", {id: "app-div"}, 
				React.createElement(AppContentRegion, null), 
					React.createElement(AppHeaderRegion, null)
					

				)
			);
		}
	});

	return AppRegion;
});