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
							console.log(hero);
							return 
							React.createElement("div", {className: "item col-xs-4 col-lg-4 grid-group-item"}, 
								React.createElement("div", {className: "thumbnail"}, 
									React.createElement("img", {className: "group list-group-image", src: hero.picture, alt: true}), 
									"jkj"
								)
							)
						})
					
					)
				)
				);
		}
	});

	return DotaheroList;
});