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
				console.log(_hero);
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
			var self = this;
			
			return (
				React.createElement("div", {id: "dotahero-summary-div", className: "module-main-div"}, 
					"self.state.hero", 
					React.createElement("div", null, self.state.hero.name)
				)
				);
		}
	});

	return DotaheroSummary;
});