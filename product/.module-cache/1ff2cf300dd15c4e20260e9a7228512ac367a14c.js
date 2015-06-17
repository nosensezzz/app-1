define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var RowSkill = React.createClass({displayName: "RowSkill",
		getInitialState: function () {
			return {};
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
				React.createElement("div", {className: "row hero-summary-row-div"}, 
					React.createElement("span", {className: "col-xs-4 full-height"}, 
						React.createElement("img", {className: "hero-summary-row-skill-icon", src: img})
					), 
					React.createElement("span", {className: "col-xs-4"}, string), 
					React.createElement("span", {className: "col-xs-4"}, string)
					
				)
			);
		}
	});

	return RowSkill;
});