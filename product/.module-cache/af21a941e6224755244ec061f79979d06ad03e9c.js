define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({displayName: "DotaheroList",
		getInitialState: function () {
			return {
				filter:false,
				displayHeroes: null,
			};
		},

		componentWillMount: function (argument) {
			var self = this;
			self.setState({
				displayHeroes: self.props.data.heroLocalData
			});
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
			location.assign("/#aaaa");
		},

		heroButtonClicked: function (hero , e) {

			e.stopPropagation();
			console.log(hero);

		},

		filterType: function (type , e) {
			var self = this,
				tem = null;
			console.log(type);
			switch (type){
				case "int":
				break;
				case "agi":
				break;
				case "str":
				break;
				default:break;
			}

			tem = _.filter(self.props.data.heroLocalData , function (hero , i) {
				return hero.type === type;
			});
			self.setState({
				displayHeroes: tem,
			});
		},

		render: function () {
			var self = this;
			// render view
			return (
				React.createElement("div", {id: "dotahero-list-div", className: "module-main-div positionRelative"}, 
					React.createElement("div", {id: "filter-block", className: "hero-filter-block"}, 
						React.createElement("button", {type: "checkbox", onClick: self.filterType.bind(self , 'int'), className: "btn btn-default"}, "Int"), 
						React.createElement("button", {type: "checkbox", onClick: self.filterType.bind(self , 'agi'), className: "btn btn-default"}, "agi"), 
						React.createElement("button", {type: "checkbox", onClick: self.filterType.bind(self , 'str'), className: "btn btn-default"}, "str"), 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar"), 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar"), 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar"), 
						React.createElement("div", {className: "clearboth", id: "filter-block-content"}, "leftbar")
					), 

					React.createElement("div", {id: "hero-list", className: "hero-list-block overflowHidden"}, 
					
						self.state.displayHeroes.map(function (hero) {
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