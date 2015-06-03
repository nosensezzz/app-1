define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var DotaheroSummary = React.createClass({
		getInitialState: function () {
			var self = this;
			return {
				params: self.props.data,
				root: self.props.root,
				hero: self.props.root.selectedHero,
			};
		},

		componentWillMount: function (argument) {
			var self = this;
			console.log(self.state);
			self.state.root.RegisterHeaderBackButton('list');
		},

		componentDidMount: function (argument) {

		},

		render: function () {
			var self = this;
			
			return (
				<div id="dotahero-summary-div" >

				</div>
				);
		}
	});

	return DotaheroSummary;
});