define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DivIcon = React.createClass({displayName: "DivIcon",
		getInitialState: function () {

		},

		componentWillMount: function (argument) {

		},

		componentDidMount: function (argument) {

		},

		render: function () {
			var self = this;
			
			return (
				React.createElement("div", {className: "row hero-summary-row-div"}, 
							React.createElement("span", {className: "col-xs-4 full-height hero-summary-row-div-span-forIcon"}, 
								React.createElement("img", {className: "hero-summary-row-div-icon", src: "build/picture/dotahero/basicIcons/overviewicon_str.png"})
							), 
							React.createElement("span", {className: "col-xs-4"}, hero.startStr, " + ", hero.StrPerLv)
						)
			);
		}
	});

	return DivIcon;
});