define(function (require) {
	'use strict';

	var HeaderReact = React.createClass({displayName: "HeaderReact",
		getInitialState: function () {
			return {

			};
		},
	
		render: function () {
			var self = this;

			return (
				React.createElement("div", {className: "app-header"}, 
					"header"
				)
			);
		}
	});

	return HeaderReact;
});