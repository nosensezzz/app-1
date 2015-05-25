define(function (require) {
	'use strict';

	var heroServiceModule = require('../service/hero-service'),
		heroService = Object.resolve(heroServiceModule);



	var DotaheroList = React.createClass({displayName: "DotaheroList",
		getInitialState: function () {
			var heroesMap = null;
			heroService.getLocalHeroesData()
				.done(function (callback) {
					heroMap = callback;
				})
				.fail(function (callback) {
					console.log(callback);
				});

			return {
				heroesMap:heroesMap
			};
		},

		render: function () {
			// initial load
			var heroes = heroService.getHeroes()
				.done(function (callback) {
					console.log(callback);
				})
				.fail(function (callback) {
					console.log(callback);
				});
			// render view
			return (
				React.createElement("div", null, "heros")
				);
		}
	});

	return DotaheroList;
});