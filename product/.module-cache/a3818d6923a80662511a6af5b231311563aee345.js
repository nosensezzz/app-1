define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DotaheroList = React.createClass({displayName: "DotaheroList",
		render: function () {
			// initial load
			console.log(heroService);
			// render view
			return (
				React.createElement("div", null, "heros")
				);
		}
	});

	return DotaheroList;
});