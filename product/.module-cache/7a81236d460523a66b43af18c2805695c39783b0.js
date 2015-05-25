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

					React.createElement("div", {className: "row list-group"}, 
					
						self.props.data.heroRankData.map(function (hero) {
							_.forEach(self.props.data.heroLocalData , function (localHero) {
								if(hero.id === localHero.id){
									return React.createElement("div", {className: "item col-xs-4 col-lg-4 grid-group-item"}, "jkj")
								}
							});
						})
					
					)
				)
				);
		}
	});

	return DotaheroList;
});