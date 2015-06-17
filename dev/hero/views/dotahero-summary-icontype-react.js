define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DivIcon = React.createClass({
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
				<div className="row hero-summary-row-div">
					<span className="col-xs-4 full-height hero-summary-row-div-span-forIcon" >
						<img className="hero-summary-row-div-icon" src={img} />
					</span>
					<span className="col-xs-4" >{string}</span>
				</div>
			);
		}
	});

	return DivIcon;
});