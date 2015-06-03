define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({

		getInitialState: function () {
			var self = this;

			return {
				filter:false,
				displayHeroes: null,
				root: self.props.root,
			};
		},

		componentWillMount: function (argument) {
			var self = this;
			self.setState({
				displayHeroes: self.props.data.heroLocalData
			});
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
			//console.log(hero);
			var self = this;
			self.state.root.selectedHero = hero;
			location.assign("/#heroes/" + hero.id + "/summary");
		},

		filterType: function (type , e) {
			var self = this,
				tem = null;
			console.log(type);
			switch (type){
				case "int":
				break;
				case "agi":
				break;
				case "str":
				break;
				default:break;
			}

			tem = _.filter(self.props.data.heroLocalData , function (hero , i) {
				return hero.type === type;
			});
			self.setState({
				displayHeroes: tem,
			});
		},

		render: function () {
			var self = this;
			// render view
			return (
				<div id="dotahero-list-div" className="module-main-div positionRelative">
					<div id="filter-block" className="hero-filter-block">
						<button type="checkbox" onClick={self.filterType.bind(self , 'int')} className="btn btn-default">Int</button>
						<button type="checkbox" onClick={self.filterType.bind(self , 'agi')} className="btn btn-default">agi</button>
						<button type="checkbox" onClick={self.filterType.bind(self , 'str')} className="btn btn-default">str</button>
						<div className="clearboth" id="filter-block-content">leftbar</div>
						<div className="clearboth" id="filter-block-content">leftbar</div>
						<div className="clearboth" id="filter-block-content">leftbar</div>
						<div className="clearboth" id="filter-block-content">leftbar</div>
					</div>

					<div id="hero-list" className="hero-list-block overflowHidden">
					{
						self.state.displayHeroes.map(function (hero) {
							return <div className="item col-xs-3 col-lg-3 grid-group-item noPadding" key={hero.id} onClick={self.heroClicked.bind(self,hero)} >
										<div className={"thumbnail "  + hero.type}>
											<img className="group list-group-image full-width" src={"build/picture/dotahero/" +hero.type+"/"+hero.id+".png"} alt />
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