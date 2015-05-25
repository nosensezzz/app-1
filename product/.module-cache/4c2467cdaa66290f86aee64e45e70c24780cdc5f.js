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
			//console.log(self);
			// render view
			return (
				React.createElement("div", {id: "dotahero-list-div"}, 
					
						self.props.data.heroRankData.map(function (hero) {
							console.log(hero);
						})
					
				)
				);
		}
	});

	return DotaheroList;
});