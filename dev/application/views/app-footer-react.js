define(function (require) {
	'use strict';

	var FooterButton = require('./app-footer-btn');

	var AppFooterReact = React.createClass({
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				<div className="app-footer-panel" id="app-footer-div">
					<div className="full-height">
						<FooterButton displayName="heroes" url="/#heroes" />
						<FooterButton displayName="user" url="/#user" />
						<FooterButton displayName="heroes" url="/#heroes" />
						<FooterButton displayName="heroes" url="/#heroes" />
						<FooterButton displayName="heroes" url="/#heroes" />	
					</div>
					
				</div>

			);
		}
	});

	return AppFooterReact;
});