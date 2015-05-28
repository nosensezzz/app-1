define(function (require) {
	'use strict';

	var AppHeaderRegion = require('./app-header-react'),
		AppFooterRegion = require('./app-footer-react'),
		AppContentRegion = require('./app-content-react');

	var AppRegion = React.createClass({
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				<div id="app-div">
					<AppHeaderRegion />
					<AppContentRegion />
					<AppFooterRegion />
					

				</div>
			);
		}
	});

	return AppRegion;
});