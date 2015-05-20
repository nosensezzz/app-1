define(function (require) {
	'use strict';

	var AppHeaderRegion = React.createClass({displayName: "AppHeaderRegion",
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				React.createElement("div", {className: "app-header-div navbar navbar-inverse navbar-fixed-top"}, 
					React.createElement("button", {onClick: this.buttonClick}, this.props.myname)
				)
			);
		}
	});

	return AppHeaderRegion;
});