define(function	(require){
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	var RowSkill = React.createClass({
		getInitialState: function () {
			var self = this,
				myId = self.props.hero.id;
			return {
				myId: myId,
				myskills: _.filter(self.props.skills , function (skill) {
					return (skill.hero === myId);
				}),
			};
		},

		componentWillMount: function (argument) {
			console.log(this.state.myskills);
		},

		componentDidMount: function (argument) {

		},

		render: function () {
			var self = this,
				img = self.props.icon,
				string = self.props.string;
			
			var passive, pierceImmunity;
			return (
				<div>
				{self.state.myskills.map(function (skill , i) {
						if(skill.pierce === true){
							pierceImmunity = (<span className="row"> Pierce Immunity : True</span>);
						} else if(skill.pierce === false){
							pierceImmunity = null;
						}

						return(
							<div className="row hero-summary-skill-row">
								<div className="col-xs-4 full-height" >
									<img className="hero-summary-row-skill-icon Icon50" src={img} />
								</div>
								<div className="col-xs-8" >

									<span className="row"> {skill.name} </span>
									<span className="row"> {skill.ability} </span>
									{pierceImmunity}
								</div>

							</div>
						);
					})
				}
				</div>
			);
		}
	});

	return RowSkill;
});