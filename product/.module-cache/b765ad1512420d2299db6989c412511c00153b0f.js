define(function (require) {
	'use strict';

	var AppHeaderRegion = require('./app-header-react');

	var AppRegion = React.createClass({displayName: "AppRegion",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("div", {className: "app-div"}, 
					React.createElement(AppHeaderRegion, null), 
					"jjjjj"
				)
			);
		}
	});

	return AppHeaderRegion;
});