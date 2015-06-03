define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DotaheroSummary = React.createClass({displayName: "DotaheroSummary",
		getInitialState: function () {
			var self = this;
			return {
				params: self.props.data,
			};
		},

		componentWillMount: function (argument) {
			var self = this;
			console.log(self.State);
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