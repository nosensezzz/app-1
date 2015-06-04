define(function (require) {
	'use strict';

	var HeaderReact = React.createClass({displayName: "HeaderReact",
		getInitialState: function () {
			var self = this;
			//console.log(self.props);
			return {
				from:self.props.params,
			};
		},
	
		render: function () {
			var self = this;

			return (
				React.createElement("div", {className: "app-header", id: "app-header-div"}, 
					"header"
				)
			);
		}
	});

	return HeaderReact;
});