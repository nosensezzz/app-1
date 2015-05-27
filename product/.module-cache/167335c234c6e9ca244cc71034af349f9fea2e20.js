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
				React.createElement("div", {id: "dotahero-list-div"}, 
					React.createElement("div", {id: "leftComponent", className: "hero-left-bar positionRelative"}, 
						React.createElement("button", {className: "positionFixed hero-bar-collapsed-i", onClick: self.leftBarControl}, "bar"), 

						React.createElement("div", {className: "clearboth", id: "hero-left-bar-content"}, "leftbar")
					), 
					React.createElement("div", {id: "rightComponent", className: "row list-group hero-right-content"}, 
					
						self.props.data.heroLocalData.map(function (hero) {
							return React.createElement("div", {className: "item col-xs-4 col-lg-4 grid-group-item", key: hero.id, onClick: self.heroClicked.bind(self,hero)}, 
										React.createElement("div", {className: "thumbnail"}, 
											React.createElement("img", {className: "group list-group-image full-width", src: "build/picture/dotahero/" +hero.type+"/"+hero.id+".png", alt: true}), 
											React.createElement("div", {className: "caption"}, 
												React.createElement("h4", {className: "group inner list-group-item-heading"}, hero.name)
											), 
											React.createElement("div", {className: "row text-center"}, 
												React.createElement("div", {className: "col-xs-12 col-md-6"}, 
													React.createElement("img", {className: "smallIcon33", src: "build/picture/dotahero/basicIcons/overviewicon_int.png", alt: true})
												), 

												React.createElement("div", {className: "col-xs-12 col-md-6 text-left"}, 
													"jlkjlkj"
												)
											), 
											React.createElement("div", {className: "row"}, 
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