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

		filterType: function (type , e) {
			console.log(type);
			console.log(e.target);
			switch (type){
				case "int":

				break;
				default:break;
			}
		},

		render: function () {
			var self = this;
			// render view
			return (
				React.createElement("div", {id: "dotahero-list-div", className: "module-main-div positionRelative"}, 
					React.createElement("div", {id: "filter-block", className: "hero-filter-block"}, 
						React.createElement("input", {type: "checkbox", onClick: self.filterType.bind(self , 'int')}), 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar"), 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar"), 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar"), 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar")
					), 

					React.createElement("div", {id: "hero-list", className: "hero-list-block overflowHidden"}, 
					
						self.props.data.heroLocalData.map(function (hero) {
							return React.createElement("div", {className: "item col-xs-3 col-lg-3 grid-group-item noPadding", key: hero.id, onClick: self.heroClicked.bind(self,hero)}, 
										React.createElement("div", {className: "thumbnail "  + hero.type}, 
											React.createElement("img", {className: "group list-group-image full-width", src: "build/picture/dotahero/" +hero.type+"/"+hero.id+".png", alt: true})
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