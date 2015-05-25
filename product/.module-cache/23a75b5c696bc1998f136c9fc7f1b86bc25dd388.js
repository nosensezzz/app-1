define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({displayName: "DotaheroList",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			var self = this;
			console.log(self);
			// render view
			return (
				React.createElement("div", {id: "dotahero-list-div"}, 
					
						console.log(self)
					
				)
				);
		}
	});

	return DotaheroList;
});