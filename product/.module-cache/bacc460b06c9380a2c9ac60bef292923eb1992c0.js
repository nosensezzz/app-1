define(function(require){ // app launch page
	'use strict';

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor'),

		// events
		ApplicationEvent = require('application/application-event');

	function lobby_vm(){
		this.applicationEvent = Object.resolve(ApplicationEvent);
		this.region = Object.resolve(Region);
		this.service = null;	
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
			self.state.root.applicationEvent.SetApplicationHeader.raise({module:"lobby" , lv:1, vm:"news"});
			React.render(React.createElement("div", null, "lobby"), self.region.element);
		
	}

	lobby_vm.prototype.sammyInit = function init_sammy (argument) {
		var self = this,
			app = Sammy(function(){

    		});
	};			

	return lobby_vm;
});