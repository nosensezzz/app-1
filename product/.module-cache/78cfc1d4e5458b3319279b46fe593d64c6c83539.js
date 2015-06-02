define(function(require){ // app start
	'use strict';
	
    var Sam = require('./sammy');

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor');

	var	ExampleViewModel = require('example/example-view-model'),
		HeroModule = require('hero/lobby-shell-view-model'),
		LobbyModule = require('lobby/lobby-shell-view-model'),
		UserModule = require('user/user-shell-view-model');

	function Application(conductor){
		this.conductor = new Conductor();

		this.region = Object.resolve(Region);
		this.lobbyModule = Object.resolve(LobbyModule);
		this.heroModule = Object.resolve(HeroModule);
	}

	Application.singleton = true;

	Application.prototype.init = function attach($body) {
		var self = this;

		if($body){
			self.LayoutInit($body);
			self.region.setElement($body.find($("#app-div")));
			self.region.screen = self;
            //console.log(self.region);
		}

		// sammy
		_.defer(function(){
			self.sammyInit();

            
		});
		location.assign("#app-shell");
		
    };

    Application.prototype.sammyInit = function init_sammy(){
    	var self = this,
    		region = Object.resolve(Region),
    		module = null;

    		region.setElement(self.region.$element.find($("#app-content-div")));
    		region.screen = self;
    		// sammy define

            Sam.loadRoutes(Sammy , self);

    };

    Application.prototype.LayoutInit = function init_layout($body) {
        var self = this,
            AppRegion = require('./views/app-react');

        React.render(React.createElement(AppRegion, null) , $body[0]);
    };

    Application.prototype.pageNotFound = function (m) {
    	//console.log(a);

    };

	return Application;
});