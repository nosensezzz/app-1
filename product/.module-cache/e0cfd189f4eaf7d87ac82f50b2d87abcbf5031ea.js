define(function(require){
	'use strict';

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor'),

		views = require('./views/user-login-react');

	function user_shell_vm(){
		this.parent = null;
		this.region = Object.resolve(Region);
	}

	user_shell_vm.prototype.ready = function _ready(parent , child) {
		// Initial module...
		var self = this;
		self.parent = parent;
		self.region.$element.attr("id", "user-shell");

		self.reactInit();

		_.defer(function(){
			self.sammyInit();
		});
		
	};

	user_shell_vm.prototype.reactInit = function init_react (argument) {
		var self = this;

		React.render(React.createElement(UserLogin, null)	, self.region.element);
	}

	user_shell_vm.prototype.sammyInit = function init_sammy (argument) {
		// body...
		var app = Sammy(function(){

    		});
	}

	return user_shell_vm;
});