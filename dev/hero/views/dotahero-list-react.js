define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({
		getInitialState: function () {
			return {
				filter:false,
			};
		},

		componentWillMount: function (argument) {

		},

		componentDidMount: function (argument) {
			var self = this;
			self.setState({
				filterComponent: $("#filter-block"),
				filterComponentContent: $("#filter-block-content"),
				listComponent: $("#hero-list"),

			});
		},

		heroClicked: function (hero) {
			console.log(hero);
			
		},

		heroButtonClicked: function (hero , e) {
			e.stopPropagation();
		},

		filterControl: function (e) {
			var self = this;
			//console.log(self.state)
			if(self.state.filter){
				self.state.filterComponentContent.hide();

				self.state.filterComponent.show();
				self.state.listComponent.addClass("hero-list-block");
				self.state.listComponent.removeClass("hero-list-block-expand");

				self.setState({
					filter:false
				});

				
			} else {
				self.state.filterComponentContent.show();

				self.state.filterComponent.hide();
				self.state.listComponent.removeClass("hero-list-block");
				self.state.listComponent.addClass("hero-list-block-expand");
				self.setState({
					filter:true
				});
			}
		},

		render: function () {
			var self = this;
			// render view
			return (
				<div id="dotahero-list-div" className="module-main-div positionRelative">
					<div id="filter-block" className="hero-filter-block">
						<div className="clearboth" id="filter-block-content">leftbar</div>
						<div className="clearboth" id="filter-block-content">leftbar</div>
						<div className="clearboth" id="filter-block-content">leftbar</div>
						<div className="clearboth" id="filter-block-content">leftbar</div>
						<div className="clearboth" id="filter-block-content">leftbar</div>
					</div>

					<div id="hero-list" className="row hero-list-block">
					{
						self.props.data.heroLocalData.map(function (hero) {
							return <div className="item col-xs-4 col-lg-4 grid-group-item" key={hero.id} onClick={self.heroClicked.bind(self,hero)} >
										<div className="thumbnail">
											<img className="group list-group-image full-width" src={"build/picture/dotahero/" +hero.type+"/"+hero.id+".png"} alt />
											<div className="caption">
												<h4 className="group inner list-group-item-heading">{hero.name}</h4>
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