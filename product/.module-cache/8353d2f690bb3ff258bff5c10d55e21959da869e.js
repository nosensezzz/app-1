define(function (require) {
	'use strict';

	var AppHeaderRegion = require('./app-header-react'),
		AppFooterRegion = require('./app-footer-react'),
		AppContentRegion = require('./app-content-react');

	var AppRegion = React.createClass({displayName: "AppRegion",
		getInitialState: function () {
			var self = this;
			return {
				headerParams: self.props.Header || null,
				contentParams: self.props.Content || null,
				footerParams: self.props.Footer || null,
			};
		},

		render: function () {
			return (
				React.createElement("div", {id: "app-div"}, 
					React.createElement(AppHeaderRegion, null), 
					React.createElement(AppContentRegion, null), 
					React.createElement(AppFooterRegion, null)
				)
			);
		}
	});

	return AppRegion;
});