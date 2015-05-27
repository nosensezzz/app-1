define(function(require){ // app launch page
	'use strict';

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor'),

		heroServiceModule = require('./service/hero-service');

	// react component
	var DotaHeroList = require('./views/dotahero-list-react');

	function lobby_vm(){
		this.region = Object.resolve(Region);
		this.service = Object.resolve(heroServiceModule);
		this.parent = null;

		this.heroLocalData = null;
		this.heroRankData = null;
	}

	lobby_vm.prototype.ready = function _ready(paret , chilc) {
		// Initial module...
		var self = this;
		self.region.$element.attr("id", "user-shell");

		self.reactInit();

		_.defer(function(){
			self.sammyInit();
		});
		
	};

	lobby_vm.prototype.reactInit = function init_react (argument) {
		var self = this,
			dfd = $.Deferred();

		loadDotaheroList(self , dfd);

		dfd.done(function (callback) {
			React.render(React.createElement(DotaHeroList, {data: callback}), self.region.element);
		});
		
	}

	lobby_vm.prototype.sammyInit = function init_sammy (argument) {
		var self = this,
			app = Sammy(function(){

    		});
    			
	}

	function loadDotaheroList(self , dfd) {
		self.service.getLocalHeroesData()
		.then(function (callback) {
			self.heroLocalData = callback;
			self.service.getHeroes()
			.then(function (callback) {
				self.heroRankData = callback;
				dfd.resolve(self);
			});
		});
		
		return dfd.promise();
	}

	return lobby_vm;
});