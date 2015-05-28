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

		componentWillMount: function (argument) {

		},

		componentDidMount: function (argument) {
			var self = this;
			self.setState({
				leftComponent: $("#leftComponent"),
				leftComponentContent: $("#hero-left-bar-content"),
				rightComponent: $("#rightComponent"),

			});
		},

		heroClicked: function (hero) {
			console.log(hero);
			
		},

		heroButtonClicked: function (hero , e) {
			e.stopPropagation();
		},

		leftBarControl: function (e) {
			var self = this;
			//console.log(self.state)
			if(self.state.leftPanel){
				self.state.leftComponent.addClass("hero-left-bar-hide");
				self.state.leftComponent.removeClass("hero-left-bar");
				self.state.rightComponent.addClass("hero-right-content-full");
				self.state.rightComponent.removeClass("hero-right-content");

				self.setState({
					leftPanel:false
				});

				self.state.leftComponentContent.hide();
			} else {
				self.state.leftComponent.removeClass("hero-left-bar-hide");
				self.state.leftComponent.addClass("hero-left-bar");
				self.state.rightComponent.removeClass("hero-right-content-full");
				self.state.rightComponent.addClass("hero-right-content");
				self.setState({
					leftPanel:true
				});

				self.state.leftComponentContent.show();
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
						React.createElement("div", {className: "clearboth", id: "hero-left-bar-content"}, "leftbar")
					), 

					React.createElement("button", {className: "positionAbsolute hero-bar-collapsed-i", onClick: self.filterControl}, "filter")
				)
				);
		}
	});

	return DotaheroList;
});