define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DivIcon = React.createClass({displayName: "DivIcon",
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
					React.createElement("span", {className: "col-xs-4 full-height hero-summary-row-div-span-forIcon"}, 
						React.createElement("img", {className: "hero-summary-row-div-icon", src: img})
					), 
					React.createElement("span", {className: "col-xs-4"}, string)
				)
			);
		}
	});

	return DivIcon;
});