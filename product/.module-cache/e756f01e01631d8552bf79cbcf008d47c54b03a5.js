define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/user-service'),
		heroService = Object.resolve(heroServiceModule);

	var DotaheroList = React.createClass({displayName: "DotaheroList",
		render: function () {
			// initial load

			// render view
			return (
				React.createElement("div", null, "heros")
				);
		}
	});

	return DotaheroList;
});