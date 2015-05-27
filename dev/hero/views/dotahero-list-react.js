define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({
		getInitialState: function () {
			return {
				leftPanel:true,
			};
		},

		componentWillMount: function (argument) {

		},

		componentDidMount: function (argument) {
			var self = this;
			self.setState({
				leftComponent: $("#leftComponent"),
				leftComponentContent: $("#hero-left-bar-content"),
				rightComponent: $("#rightComponent"),

			});
		},

		heroClicked: function (hero) {
			console.log(hero);
			
		},

		heroButtonClicked: function (hero , e) {
			e.stopPropagation();
		},

		leftBarControl: function (e) {
			var self = this;
			//console.log(self.state)
			if(self.state.leftPanel){
				self.state.leftComponent.addClass("hero-left-bar-hide");
				self.state.leftComponent.removeClass("hero-left-bar");
				self.state.rightComponent.addClass("hero-right-content-full");
				self.state.rightComponent.removeClass("hero-right-content");

				self.setState({
					leftPanel:false
				});

				self.state.leftComponentContent.hide();
			} else {
				self.state.leftComponent.removeClass("hero-left-bar-hide");
				self.state.leftComponent.addClass("hero-left-bar");
				self.state.rightComponent.removeClass("hero-right-content-full");
				self.state.rightComponent.addClass("hero-right-content");
				self.setState({
					leftPanel:true
				});

				self.state.leftComponentContent.show();
			}
		},

		render: function () {
			var self = this;
			// render view
			return (
				<div id="dotahero-list-div">
					<div id="leftComponent" className="hero-left-bar positionRelative">
						<button className="positionFixed hero-bar-collapsed-i" onClick={self.leftBarControl}>bar</button> 

						<div className="clearboth" id="hero-left-bar-content">leftbar</div>
					</div>
					<div id="rightComponent" className="row list-group hero-right-content">
					{
						self.props.data.heroLocalData.map(function (hero) {
							return <div className="item col-xs-4 col-lg-4 grid-group-item" key={hero.id} onClick={self.heroClicked.bind(self,hero)} >
										<div className="thumbnail">
											<img className="group list-group-image full-width" src={"build/picture/dotahero/" +hero.type+"/"+hero.id+".png"} alt />
											<div className="caption">
												<h4 className="group inner list-group-item-heading">{hero.name}</h4>
											</div>
											<div className="row text-center paddingtopbottom5px">
												<div className="col-xs-12 col-md-6">
													<div className="col-xs-12 col-md-4" >
														<img className="smallIcon33" src={"build/picture/dotahero/basicIcons/overviewicon_int.png"} alt />
													</div>
													<div className="col-xs-12 col-md-8 text-left" >
														{hero.startInt} + {hero.IntPerLv}
													</div>
												</div>

												<div className="col-xs-12 col-md-6">
													<div className="col-xs-12 col-md-4" >
														<img className="smallIcon33" src={"build/picture/dotahero/basicIcons/overviewicon_attack.png"} alt />
													</div>
													<div className="col-xs-12 col-md-8 text-left" >
														{hero.minDmgLv1} - {hero.maxDmgLv1}
													</div>
												</div>
											</div>

											<div className="row text-center paddingtopbottom5px">
												<div className="col-xs-12 col-md-6">
													<div className="col-xs-12 col-md-4" >
														<img className="smallIcon33" src={"build/picture/dotahero/basicIcons/overviewicon_agi.png"} alt />
													</div>
													<div className="col-xs-12 col-md-8 text-left" >
														{hero.startAgi} + {hero.AgiPerLv}
													</div>
												</div>

												<div className="col-xs-12 col-md-6">
													<div className="col-xs-12 col-md-4" >
														<img className="smallIcon33" src={"build/picture/dotahero/basicIcons/overviewicon_speed.png"} alt />
													</div>
													<div className="col-xs-12 col-md-8 text-left" >
														{hero.speed}
													</div>
												</div>
											</div>

											<div className="row text-center paddingtopbottom5px">
												<div className="col-xs-12 col-md-6">
													<div className="col-xs-12 col-md-4" >
														<img className="smallIcon33" src={"build/picture/dotahero/basicIcons/overviewicon_str.png"} alt />
													</div>
													<div className="col-xs-12 col-md-8 text-left" >
														{hero.startStr} + {hero.StrPerLv}
													</div>
												</div>

												<div className="col-xs-12 col-md-6">
													<div className="col-xs-12 col-md-4" >
														<img className="smallIcon33" src={"build/picture/dotahero/basicIcons/overviewicon_armor.png"} alt />
													</div>
													<div className="col-xs-12 col-md-8 text-left" >
														{hero.armor}
													</div>
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