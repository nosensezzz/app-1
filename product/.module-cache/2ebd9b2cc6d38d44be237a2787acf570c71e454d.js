define(function(require){ // app launch page
	'use strict';

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor'),
		heroServiceModule = require('./service/hero-service'),
		heroService = Object.resolve(heroServiceModule);

	// react component
	var DotaHeroList = require('./views/dotahero-list-react');

	function lobby_vm(){
		this.region = Object.resolve(Region);

		this.parent = null;
	}

	lobby_vm.prototype.ready = function _ready(paret , chilc) {
		// Initial module...
		var self = this;
		self.region.$element.attr("id", "lobby-shell");

		self.reactInit();


		_.defer(function(){
			self.sammyInit();
		});
		
	};

	lobby_vm.prototype.reactInit = function init_react (argument) {
		var self = this;

		React.render(React.createElement(DotaHeroList, {name: "foo"}), self.region.element);
	}

	lobby_vm.prototype.sammyInit = function init_sammy (argument) {
		var self = this,
			app = Sammy(function(){

    		});
    			
	}

	return lobby_vm;
});