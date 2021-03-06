define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({displayName: "DotaheroList",
		getInitialState: function () {
			return {
				leftPanel:true,
			};
		},

		heroClicked: function (hero) {
			console.log(hero);
			
		},

		heroButtonClicked: function (hero , e) {
			e.stopPropagation();
		},

		leftBarControl: function (e) {
			var self = this;
			console.log(self.state)
		},

		render: function () {
			var self = this;
			//console.log(self);
			// render view
			return (
				React.createElement("div", {id: "dotahero-list-div"}, 
					React.createElement("div", {className: "hero-left-bar"}, 
						React.createElement("button", {onClick: self.leftBarControl})
					), 
					React.createElement("div", {className: "row list-group hero-right-content"}, 
					
						self.props.data.heroRankData.map(function (hero) {
							return React.createElement("div", {className: "item col-xs-4 col-lg-4 grid-group-item", key: hero.id, onClick: self.heroClicked.bind(self,hero)}, 
										React.createElement("div", {className: "thumbnail"}, 
											React.createElement("img", {className: "group list-group-image full-width", src: hero.picture, alt: true}), 
											React.createElement("div", {className: "caption"}, 
												React.createElement("h4", {className: "group inner list-group-item-heading"}, hero.name), 
												React.createElement("p", {className: "group inner list-group-item-text"})
											), 
											React.createElement("div", {className: "row"}, 
												React.createElement("div", {className: "col-xs-12 col-md-6"}, 
													React.createElement("p", {className: "lead"})
												), 
												React.createElement("div", {className: "col-xs-12"}, 
													React.createElement("a", {href: "#", className: "btn btn-default full-width", onClick: self.heroButtonClicked.bind(self , hero)}, "button")
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