define(function (require) {
	'use strict';

	var AppHeaderRegion = require('./app-header-react'),
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

				</div>
			);
		}
	});

	return AppRegion;
});