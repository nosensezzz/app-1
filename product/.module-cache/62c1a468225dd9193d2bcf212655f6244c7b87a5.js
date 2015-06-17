define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DotaheroSummary = React.createClass({displayName: "DotaheroSummary",
		getInitialState: function () {
			var self = this;
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