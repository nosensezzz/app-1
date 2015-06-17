define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var RowSkill = React.createClass({
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
				<div className="row hero-summary-skill-row">
					<div className="col-xs-4 full-height" >
						<img className="hero-summary-row-skill-icon Icon50" src={img} />
					</div>
					<div className="col-xs-8" >{string}</div>

				</div>
			);
		}
	});

	return RowSkill;
});