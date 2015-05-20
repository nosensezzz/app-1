define(function(require){ // app - user module - shell
	'use strict';

	// Spa tools
	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor');

	// React Components
	var UserRegister = require('./views/user-register-react'),
		UserLogin = require('./views/user-login-react'),
		UserList = require('./views/user-list-react');

	function user_shell_vm(){
		this.parent = null;
		this.region = Object.resolve(Region);
	}

	user_shell_vm.prototype.ready = function _ready(parent , child) {
		// Initial module...
		var self = this;
		window.vm = self;
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
		//self.registerPage();
	};

	user_shell_vm.prototype.loginPage = function (argument) {
		var self = this;
		React.render(React.createElement(UserLogin, null), self.region.element);
	}

	user_shell_vm.prototype.registerPage = function() {
		var self = this;

		React.render(React.createElement(UserRegister, null)	, self.region.element);
	};

	user_shell_vm.prototype.sammyInit = function init_sammy (argument) {
		var self = this;
		Sammy(function(){
    			this.get("#app-shell" , function (argument) {
    				self.conductor.append(self, self.contentRegion, self.lobbyModule);
    			});

    			this.get("#user/register" , function (argument) {
    				module = Object.resolve(UserModule);
    				self.conductor.append(self, region, module);
    			});

    			this.notFound = function not_found (argument) {
    				// body...
    			}
    		});
	};

	return user_shell_vm;
});