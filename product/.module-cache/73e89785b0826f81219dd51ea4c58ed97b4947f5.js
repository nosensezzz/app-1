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
							_.forEach(self.props.data.heroLocalData , function (localHero) {
								console.log(localHero);
							});
						})
					
				)
				);
		}
	});

	return DotaheroList;
});