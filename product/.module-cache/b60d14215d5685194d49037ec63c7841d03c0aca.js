define(function(require){ // app start
	'use strict';
	
	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor');

	var	ExampleViewModel = require('example/example-view-model'),
		LobbyModule = require('lobby/lobby-shell-view-model'),
		UserModule = require('user/user-shell-view-model');

	function Application(conductor){
		this.conductor = new Conductor();

		this.region = Object.resolve(Region);

		this.lobbyModule = Object.resolve(LobbyModule);
		this.contentRegion = Object.resolve(Region);
	}

	Application.singleton = true;

	Application.prototype.init = function attach($body) {
		var self = this;

		if($body){
			self.LayoutInit($body);
			self.region.setElement($body.find($("#app-main")));
			self.region.screen = self;
		}

		self.contentRegion.setElement(self.region.$element.find($("#app-content")));

		// sammy
		_.defer(function(){
			self.sammyInit();
		});
		
    };

    Application.prototype.sammyInit = function init_sammy(){
    	var self = this,
    		region = Object.resolve(Region),
    		module = null;

    		region.setElement(self.region.$element.find($("#app-content")));
    				region.screen = self;
    		// sammy define
    		Sammy(function(){
    			this.get("#app-shell" , function (argument) {
    				self.conductor.append(self, self.contentRegion, self.lobbyModule);
    			});

    			this.get("#user" , function (argument) {
    				module = Object.resolve(UserModule);
    				self.conductor.append(self, region, module);
    			});

    			this.notFound = function not_found (argument) {
    				// body...
    			}
    		});

    		Sammy().run("/");
    };

    Application.prototype.LayoutInit = function init_layout($body) {
        var self = this;

		var loginButton = React.createElement('a' , {href:'#user'} , 'login'),
			logo = React.createElement('a' , {href:'#app-shell'} , 'logo'),
			headerDiv = React.createElement('div' , {className:'app-header-div'} , logo , '      ' , loginButton),

			footerDiv = React.createElement('div' , {className:'app-footer-div'} , 'footer'),
			contentDiv = React.createElement('div' , {className:'app-content-div' , id:'app-content'});

		var	appMainDiv = React.createElement('div' , {id:'app-main'} , headerDiv , contentDiv , footerDiv);

        React.render(appMainDiv , $body[0]);
    };

	return Application;
});