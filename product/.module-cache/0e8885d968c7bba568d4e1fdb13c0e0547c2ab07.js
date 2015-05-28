define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({displayName: "DotaheroList",
		getInitialState: function () {
			return {
				filter:false,
			};
		},

		componentWillMount: function (argument) {

		},

		componentDidMount: function (argument) {
			var self = this;
			self.setState({
				filterComponent: $("#filter-block"),
				filterComponentContent: $("#filter-block-content"),
				listComponent: $("#hero-list"),

			});
		},

		heroClicked: function (hero) {
			console.log(hero);
			
		},

		heroButtonClicked: function (hero , e) {
			e.stopPropagation();
		},

		filterControl: function (e) {
			var self = this;
			//console.log(self.state)
			if(self.state.filter){
				self.state.filterComponent.show();
				self.state.listComponent.removeClass("full-height");

				self.setState({
					filter:false
				});

				self.state.filterComponentContent.hide();
			} else {
				self.state.filterComponent.hide();
				self.setState({
					filter:true
				});

				self.state.filterComponentContent.show();
			}
		},

		render: function () {
			var self = this;
			// render view
			return (
				React.createElement("div", {id: "dotahero-list-div", className: "module-main-div positionRelative"}, 
					React.createElement("div", {id: "hero-list", className: "row list-group hero-list-block"}, 
					
						self.props.data.heroLocalData.map(function (hero) {
							return React.createElement("div", {className: "item col-xs-4 col-lg-4 grid-group-item", key: hero.id, onClick: self.heroClicked.bind(self,hero)}, 
										React.createElement("div", {className: "thumbnail"}, 
											React.createElement("img", {className: "group list-group-image full-width", src: "build/picture/dotahero/" +hero.type+"/"+hero.id+".png", alt: true}), 
											React.createElement("div", {className: "caption"}, 
												React.createElement("h4", {className: "group inner list-group-item-heading"}, hero.name)
											)
										)
									)
						})
					
					), 

					React.createElement("div", {id: "filter-block", className: "hero-filter-block positionAbsolute"}, 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar")
					), 

					React.createElement("button", {className: "positionAbsolute hero-bar-collapsed-i", onClick: self.filterControl}, "filter")
				)
				);
		}
	});

	return DotaheroList;
});