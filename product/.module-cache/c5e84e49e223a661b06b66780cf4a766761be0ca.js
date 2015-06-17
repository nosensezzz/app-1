define(function(require){ // app launch page
	'use strict';

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor'),

		heroServiceModule = require('./service/hero-service');

	var App = require('../application/applicationjj');

	// react component
	var DotaHeroList = require('./views/dotahero-list-react'),
		DotaHeroSummary = require('./views/dotahero-summary-react');

	function HeroViewModel(){
		this.region = Object.resolve(Region);
		this.service = Object.resolve(heroServiceModule);
		this.parent = null;

		this.heroLocalData = null;
		this.heroRankData = null;
	}

	HeroViewModel.prototype.ready = function _ready(parent , child) {
		// Initial module...
		var self = this;

		self.region.$element.attr("id", "user-shell");

		self.reactInit();

		_.defer(function(){
			self.sammyInit();
		});
		
	};

	HeroViewModel.prototype.reactInit = function init_react (argument) {
		var self = this,
			dfd = $.Deferred();

		loadDotaheroList(self , dfd);

		dfd.done(function (callback) {
			React.render(React.createElement(DotaHeroList, {data: callback, root: self}), self.region.element);
		});
		
	};

	HeroViewModel.prototype.sammyInit = function init_sammy (argument) {
		var self = this,
			app = Sammy(function(){

    		});
    			
	};

	HeroViewModel.prototype.ViewHeroSummary = function viewhero (params) {
		console.log(params);
		var self = this;
		React.render(React.createElement(DotaHeroSummary, {data: params, root: self}), self.region.element);
	};

	HeroViewModel.prototype.RegisterHeaderBackButton = function (where) {
		var self = this,
			app = Object.resolve(App),
			params = null;
			switch(where){
				case "list":
				params = {
					type:"button",
					caption: "back",
				};
				
				console.log(app);
				app.ModifyLayout(params , null , null);
				break;
				default:break;
			}
	};

	function loadDotaheroList(self , dfd) {
		self.service.getLocalHeroesData()
		.then(function (callback) {
			self.heroLocalData = callback;
			dfd.resolve(self);
		});
		
		return dfd.promise();
	}

	return HeroViewModel;
});