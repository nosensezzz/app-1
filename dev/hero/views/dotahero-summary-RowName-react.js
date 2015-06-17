define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DivStringOne = React.createClass({
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
				<div className="row hero-summary-row-div">
					<span className="col-xs-4 text-left" >
						{string}
					</span>
				</div>
			);
		}
	});

	return DivStringOne;
});