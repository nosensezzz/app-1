define(function(require){ // app start
	'use strict';
	
    var Sam = require('./sammy');

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor'),
		ApplicationEvent = require('./application-event');

	var	ExampleViewModel = require('example/example-view-model'),
		HeroModule = require('hero/lobby-shell-view-model'),
		LobbyModule = require('lobby/lobby-shell-view-model'),
		UserModule = require('user/user-shell-view-model');

	var AppRegion = require('./views/app-react'),
		AppHeaderRegion = require('./views/app-header-react'),
		AppFooterRegion = require('./views/app-footer-react'),
		AppContentRegion = require('./views/app-content-react');

	function Application(conductor){
		var self = this;
		this.conductor = new Conductor();
		this.appEvent = Object.resolve(ApplicationEvent);
		this.region = Object.resolve(Region);
		this.lobbyModule = Object.resolve(LobbyModule);
		this.heroModule = Object.resolve(HeroModule);

		self.appEvent.add(self.ModifyHeader , self);
	}

	Application.singleton = true;

	Application.prototype.init = function attach($body) {
		var self = this;
		

		if($body){
			self.LayoutInit($body);
			self.region.setElement($body.find($("#app-div")));
			self.region.screen = self;
		}

		// sammy
		_.defer(function(){
			Sam.loadRoutes(Sammy , self);
            location.assign("#app-shell");
		});
    };

    Application.prototype.LayoutInit = function init_layout($body) {
        var self = this;
        React.render(React.createElement(AppRegion, null) , $body[0]);
        React.render(React.createElement(AppHeaderRegion, null) , $("#app-header-div")[0]);
        React.render(React.createElement(AppContentRegion, null) , $("#app-content-div")[0]);
        React.render(React.createElement(AppFooterRegion, null) , $("#app-footer-div")[0]);
    };

    Application.prototype.ModifyLayout = function (target , params) {
        var self = this;
        console.log("modify " + target);
    };

    Application.prototype.pageNotFound = function (m) {
    	//console.log(a);

    };

	return Application;
});