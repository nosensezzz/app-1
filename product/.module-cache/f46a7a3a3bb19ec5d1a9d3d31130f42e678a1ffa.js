define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DivStringOne = React.createClass({displayName: "DivStringOne",
		getInitialState: function () {
			return {};
		},

		componentWillMount: function (argument) {

		},

		componentDidMount: function (argument) {

		},

		render: function () {
			console.log(this);
			var self = this,
				img = self.props.icon,
				string = self.props.string;
			
			return (
				React.createElement("div", {className: "row hero-summary-row-div"}, 
					React.createElement("span", {className: "col-xs-4 full-height hero-summary-row-div-span-forIcon"}, 
						"123"
					), 
					React.createElement("span", {className: "col-xs-4"}), 
					React.createElement("span", {className: "col-xs-4"})
				)
			);
		}
	});

	return DivStringOne;
});