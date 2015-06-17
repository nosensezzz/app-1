define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DotaheroSummary = React.createClass({displayName: "DotaheroSummary",

		getInitialState: function () {
			var self = this,
				_hero = null;
				_.each(self.props.root.heroLocalData, function (hero) {
					//console.log(hero.id);
					//console.log(self.props.data.id);
					if (hero.id.toString() === self.props.data.id.toString()){
						_hero = hero;
						return;
					}
				});
				//console.log(_hero);
			return {
				params: self.props.data,
				root: self.props.root,
				hero: _hero
			};
		},

		componentWillMount: function (argument) {
			var self = this;
			self.state.root.applicationEvent.SetApplicationHeader.raise({module:"hero" , lv:2, vm:"summary"});
			console.log(self.state);

		},

		componentDidMount: function (argument) {

		},

		render: function () {
			var self = this, typeIcon,
				hero = self.state.hero;
				switch(hero.type){
					case "int":
						typeIcon = ""
					break;
					case "str":
					break;
					case "agi":
					break;
					default:break;
				}
			
			return (
				React.createElement("div", {id: "dotahero-summary-div", className: "module-main-div"}, 
					React.createElement("div", {className: "container"}, 
						React.createElement("div", {className: "hero-summary-img-div"}, 
							React.createElement("img", {className: "group list-group-image img-thumbnail hero-summary-img", src: "build/picture/dotahero/" +hero.type+"/"+hero.id+".png", alt: true})
						), 
						React.createElement("div", {className: "row"}, 
							React.createElement("span", {className: "col-xs-4"}, 
								React.createElement("img", {src: "build/picture/dotahero/basicIcons/overviewicon_str.png"})
							), 
							React.createElement("span", {className: "col-xs-4"}, hero.startStr), 
							React.createElement("span", {className: "col-xs-4"}, "+ ", hero.StrPerLv)
						), 
						React.createElement("div", {className: "row"}, 
							React.createElement("span", {className: "col-xs-4"}, 
								React.createElement("img", {src: "build/picture/dotahero/basicIcons/overviewicon_agi.png"})
							), 
							React.createElement("span", {className: "col-xs-4"}, hero.startAgi), 
							React.createElement("span", {className: "col-xs-4"}, "+ ", hero.AgiPerLv)
						), 
						React.createElement("div", {className: "row"}, 
							React.createElement("span", {className: "col-xs-4"}, 
								React.createElement("img", {src: "build/picture/dotahero/basicIcons/overviewicon_int.png"})
							), 
							React.createElement("span", {className: "col-xs-4"}, hero.startInt), 
							React.createElement("span", {className: "col-xs-4"}, "+ ", hero.IntPerLv)
						), 

						React.createElement("div", {className: "row"}, 
							React.createElement("span", {className: "col-xs-4"}, 
								React.createElement("img", {src: "build/picture/dotahero/basicIcons/overviewicon_attack.png"}), 
								"Lv1"
							), 
							React.createElement("span", {className: "col-xs-4"}, hero.startInt), 
							React.createElement("span", {className: "col-xs-4"}, "+ ", hero.IntPerLv)
						), 
						React.createElement("div", {className: "row"}, 
							React.createElement("span", {className: "col-xs-4"}, hero.name), 
							React.createElement("span", {className: "col-xs-4"}, hero.shortname)
						)

					)
				)
				);
		}
	});

	return DotaheroSummary;
});