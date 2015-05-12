define(function(require){ // app - user module - shell
	'use strict';

	// Spa tools
	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor');

	// React Components
	var UserLogin = require('./views/user-login-react'),
		UserList = require('./views/user-list-react');

	function user_shell_vm(){
		this.parent = null;
		this.region = Object.resolve(Region);
	}

	user_shell_vm.prototype.ready = function _ready(parent , child) {
		// Initial module...
		var self = this;
		self.parent = parent;
		self.region.$element.attr("id", "user-shell");

		_.defer(function(){
			self.reactInit();

			// register sub route
			self.sammyInit();
		});
	};

	user_shell_vm.prototype.reactInit = function init_react (argument) {
		var self = this;
		self.loginPage();
		//self.registerUser();
	};

	user_shell_vm.prototype.registerUser = function() {
		var self = this;
		React.render(React.createElement(UserLogin, null)	, self.region.element);
	};

	user_shell_vm.prototype.sammyInit = function init_sammy (argument) {
		var self = this;
	};

	return user_shell_vm;
});