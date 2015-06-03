define(function (require) {
	'use strict';

	var HeaderReact = React.createClass({
		getInitialState: function () {
			var self = this;
			console.log(self.props);
			return {

			};
		},
	
		render: function () {
			var self = this;

			return (
				<div className="app-header">
					<button>aa</button>

				</div>
			);
		}
	});

	return HeaderReact;
});