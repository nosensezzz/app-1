define(function (require) {
	'use strict';

	var AppContentRegion = React.createClass({displayName: "AppContentRegion",

		render: function () {
			return (
				React.createElement("div", {id: "app-content"}

				)
			);
		}
	});

	return AppContentRegion;
});