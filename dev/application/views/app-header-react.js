define(function (require) {
	'use strict';

	var AppHeaderRegion = React.createClass({
		getInitialState: function () {
			return {
			};
		},

		render: function () {
			return (
				<nav className="app-header-div navbar navbar-inverse navbar-fixed-top">
					<div className="container">
						<a className="navbar-brand" href="/#app-shell">LOGO</a>

						<div id="header-navbar" className="navbar-collapse collapse">
							<ul className="nav navbar-nav">
								<li><a href="/#heroes">Heroes</a></li>
							</ul>
							<ul className="nav navbar-nav pull-right">
								<li><a href="/#user">User</a></li>
							</ul>
						</div>
					</div>
					
				</nav>

			);
		}
	});

	return AppHeaderRegion;
});