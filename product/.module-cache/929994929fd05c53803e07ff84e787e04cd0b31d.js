define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({displayName: "DotaheroList",
		getInitialState: function () {
			return {
			};
		},

		heroClicked: function (e) {
			console.log(e);
		},

		render: function () {
			var self = this;
			//console.log(self);
			// render view
			return (
				React.createElement("div", {id: "dotahero-list-div"}, 

					React.createElement("div", {className: "row list-group"}, 
					
						self.props.data.heroRankData.map(function (hero) {
							return React.createElement("div", {className: "item col-xs-4 col-lg-4 grid-group-item", key: hero.id, onClick: self.heroClicked.bind(hero)}, 
										React.createElement("div", {className: "thumbnail"}, 
											React.createElement("img", {className: "group list-group-image", src: hero.picture, alt: true}), 
											React.createElement("div", {className: "caption"}, 
												React.createElement("h4", {className: "group inner list-group-item-heading"}, hero.id), 
												React.createElement("p", {className: "group inner list-group-item-text"}, "id - information")
											), 
											React.createElement("div", {className: "row"}, 
												React.createElement("div", {className: "col-xs-12 col-md-6"}, 
													React.createElement("p", {className: "lead"}, " text p ")
												), 
												React.createElement("div", {className: "col-xs-12 col-md-6"}, 
													React.createElement("a", {href: "#", className: "btn btn-default full-width"}, "button")
												)
											)
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