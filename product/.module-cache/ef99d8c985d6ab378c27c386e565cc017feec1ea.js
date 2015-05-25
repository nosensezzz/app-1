define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({displayName: "DotaheroList",
		getInitialState: function () {
			var heroesMap = null;
			heroService.getLocalHeroesData()
				.done(function (callback) {
					heroesMap = callback;
				})
				.fail(function (callback) {
					console.log(callback);
				});

			return {
				heroesMap:heroesMap
			};
		},

		render: function () {
			var heroesRankList = null, heroes
			heroService.getHeroes()
				.done(function (callback) {
					console.log(callback);
					heroesRankList = callback;
					h
				})
				.fail(function (callback) {
					console.log(callback);
				});
			// render view
			return (
				React.createElement("div", {id: "dotahero-list-div"}, 
					React.createElement("div", {className: "row list-group"}

					)
				)
				);
		}
	});

	return DotaheroList;
});