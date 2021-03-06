define(function (require) {
	'use strict';

	var HeaderReact = React.createClass({displayName: "HeaderReact",
		getInitialState: function () {
			return {

			};
		},

		clicked: function (url) {
			var self = this;
			location.assign(url);
		},

		render: function () {
			var self = this;

			return (
				React.createElement("div", {className: "app-footer-block", onClick: self.clicked.bind(self , self.props.url)}, 
					self.props.displayName
				)
			);
		}
	});

	return HeaderReact;
});