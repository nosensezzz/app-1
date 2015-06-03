define(function (require) {
	'use strict';

	var AppHeaderRegion = require('./app-header-react'),
		AppFooterRegion = require('./app-footer-react'),
		AppContentRegion = require('./app-content-react');

	var AppRegion = React.createClass({
		getInitialState: function () {
			var self = this;
			return {
				headerParams: self.props.Header || null,
				contentParams: self.props.Content || null,
				footerParams: self.props.Footer || null,
			};
		},

		render: function () {
			var self = this;
			
			return (
				<div id="app-div">
					<AppHeaderRegion params={self.state.headerParams} />
					<AppContentRegion />
					<AppFooterRegion />
				</div>
			);
		}
	});

	return AppRegion;
});