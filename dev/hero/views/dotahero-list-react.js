define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({
		getInitialState: function () {
			return {
			};
		},

		heroClicked: function (hero) {
			console.log(hero);
			
		},

		heroButtonClicked: function (hero , e) {
			e.stopPropagation();
		},

		render: function () {
			var self = this;
			//console.log(self);
			// render view
			return (
				<div id="dotahero-list-div">

					<div className="row list-group">
					{
						self.props.data.heroRankData.map(function (hero) {
							return <div className="item col-xs-4 col-lg-4 grid-group-item" key={hero.id} onClick={self.heroClicked.bind(self,hero)} >
										<div className="thumbnail">
											<img className="group list-group-image" src={hero.picture} alt />
											<div className="caption">
												<h4 className="group inner list-group-item-heading">{hero.name}</h4>
												<p className="group inner list-group-item-text"></p>
											</div>
											<div className="row">
												<div className="col-xs-12 col-md-6" >
													<p className="lead"></p>
												</div>
												<div className="col-xs-12 col-md-6" >
													<a href="#" className="btn btn-default full-width" onClick={self.heroButtonClicked.bind(self , hero)} >button</a>
												</div>
											</div>
										</div>
									</div>
						})
					}
					</div>
				</div>
				);
		}
	});

	return DotaheroList;
});