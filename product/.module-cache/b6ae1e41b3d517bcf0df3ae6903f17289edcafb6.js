define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DotaheroSummary = React.createClass({displayName: "DotaheroSummary",

		getInitialState: function () {
			var self = this,
				hero = _.find(self.props.root.heroLocalData, function (hero) {
					console.log(hero);
					return (hero.id === self.props.data);
				});
			return {
				params: self.props.data,
				root: self.props.root,
				hero: self.props.root.selectedHero,
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
					React.createElement("div", null)
				)
				);
		}
	});

	return DotaheroSummary;
});