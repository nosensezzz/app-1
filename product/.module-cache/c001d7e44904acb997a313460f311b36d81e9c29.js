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
				React.createElement("div", {className: "app-div"}
					
				)
			);
		}
	});

	return AppHeaderRegion;
});