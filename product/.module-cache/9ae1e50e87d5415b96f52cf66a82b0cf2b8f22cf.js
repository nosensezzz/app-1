define(function	(require){
	'use strict';

	var ApplicationEvent = require('application/application-event'),
		heroServiceModule = require('../service/hero-service'),
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
			console.log(self.state);
			Object.resolve(ApplicationEvent);
		},

		componentDidMount: function (argument) {

		},

		render: function () {
			var self = this;
			
			return (
				React.createElement("div", {id: "dotahero-summary-div"}

				)
				);
		}
	});

	return DotaheroSummary;
});