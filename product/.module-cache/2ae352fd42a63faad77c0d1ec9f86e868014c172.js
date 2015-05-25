define(function (require) { // handle all user module api call here
	'use strict';

	function HeroService (){

	};

	HeroService.prototype.getHeroes = function(user) {
		var dfd = $.Deferred();

		$.ajax({
			type: "GET",
			dataType: "json",
			data:user,
			url: "http://localhost:3001/api/dotability/heroes",
			success: function (data) {
				dfd.resolve(data);
			},
			error: function (data) {
				dfd.reject(data);
			}
		});

		return dfd.promise();
	};

	HeroService.prototype.getLocalHeroesData = function(user) {
		var dfd = $.Deferred();

		$.ajax({
			type: "GET",
			dataType: "json",
			data:user,
			url: "product/lobby/localJson/hero.json",
			success: function (data) {
				dfd.resolve(data);
			},
			error: function (data) {
				dfd.reject(data);
			}
		});

		return dfd.promise();
	};

	return HeroService;
});