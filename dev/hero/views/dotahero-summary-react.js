define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	// react component
	var RowAttr = require('./dotahero-summary-RowAttr-react'),
		RowName = require('./dotahero-summary-RowName-react'),
		RowSkill = require('./dotahero-summary-RowSkill-react');

	var DotaheroSummary = React.createClass({

		getInitialState: function () {
			var self = this,
				_hero = null;
				_.each(self.props.root.heroLocalData, function (hero) {
					//console.log(hero.id);
					//console.log(self.props.data.id);
					if (hero.id.toString() === self.props.data.id.toString()){
						_hero = hero;
						return;
					}
				});
				//console.log(_hero);
			return {
				params: self.props.data,
				root: self.props.root,
				hero: _hero
			};
		},

		componentWillMount: function (argument) {
			var self = this;
			self.state.root.applicationEvent.SetApplicationHeader.raise({module:"hero" , lv:2, vm:"summary"});
			//console.log(self.state);
		},

		componentDidMount: function (argument) {

		},

		render: function () {
			var self = this, typeIcon,
				root = self.state.root,
				hero = self.state.hero;
				switch(hero.type){
					case "int":
						typeIcon = ""
					break;
					case "str":
					break;
					case "agi":
					break;
					default:break;
				}
			
			return (
				<div id="dotahero-summary-div" className="module-main-div" >
					<div className="container full-size">
						<div className="hero-summary-img-div">
							<img className="group list-group-image img-thumbnail hero-summary-img" 
							src={"build/picture/dotahero/" +hero.type+"/"+hero.id+".png"} alt />
						</div>
						<RowName string={hero.name} />
						<RowName string={hero.shortname} />
						<RowAttr
						 icon="build/picture/dotahero/basicIcons/overviewicon_str.png" 
						 string={hero.startStr + " + " + hero.StrPerLv} />
						<RowAttr
						 icon="build/picture/dotahero/basicIcons/overviewicon_agi.png" 
						 string={hero.startAgi + " + " + hero.AgiPerLv} />
						<RowAttr
						 icon="build/picture/dotahero/basicIcons/overviewicon_int.png" 
						 string={hero.startInt + " + " + hero.IntPerLv} />
						<RowAttr
						 icon="build/picture/dotahero/basicIcons/overviewicon_attack.png" 
						 string={hero.minDmgLv1 + " - " + hero.maxDmgLv1} />
						<RowAttr
						 icon="build/picture/dotahero/basicIcons/overviewicon_armor.png" 
						 string={hero.armor} />
						<RowAttr
						 icon="build/picture/dotahero/basicIcons/overviewicon_speed.png" 
						 string={hero.speed} />
						 <RowSkill
						 skills={root.skillLocalData}
						 hero={hero}
						 icon="build/picture/dotahero/skill/agi/2001/1.png" 
						 string={hero.speed} />
					</div>
				</div>
				);
		}
	});

	return DotaheroSummary;
});