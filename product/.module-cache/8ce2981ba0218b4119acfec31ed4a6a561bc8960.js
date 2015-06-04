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
			var self = this;
			
			return (
				React.createElement("div", {id: "app-div"}, 
					React.createElement("div", {className: "app-header", id: "app-header-div"}), 
					React.createElement("div", {id: "app-content-div", role: "main", className: "app-content"}), 
					React.createElement("div", {className: "app-footer-panel", id: "app-footer-div"})
				)
			);
		}
	});

	return AppRegion;
});