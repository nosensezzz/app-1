define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var RowSkill = React.createClass({displayName: "RowSkill",
		getInitialState: function () {
			console.log(this);
			var self = this;
			return {
				myskills: _.filter(self.props.skills , function (skill) {
					console.log(skill);
				}),
			};
		},

		componentWillMount: function (argument) {

		},

		componentDidMount: function (argument) {

		},

		render: function () {
			var self = this,
				img = self.props.icon,
				string = self.props.string;
			
			return (
				React.createElement("div", {className: "row hero-summary-skill-row"}, 
					React.createElement("div", {className: "col-xs-4 full-height"}, 
						React.createElement("img", {className: "hero-summary-row-skill-icon Icon50", src: img})
					), 
					React.createElement("div", {className: "col-xs-8"}, 
						React.createElement("span", null)
					
					)

				)
			);
		}
	});

	return RowSkill;
});