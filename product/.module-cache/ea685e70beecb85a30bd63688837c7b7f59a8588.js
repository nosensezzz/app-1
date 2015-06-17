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
			var self = this,
				string = self.props.string;
			
			return (
				React.createElement("div", {className: "row hero-summary-row-div"}, 
					React.createElement("span", {className: "col-xs-4 text-center"}, 
						string
					)
				)
			);
		}
	});

	return DivStringOne;
});