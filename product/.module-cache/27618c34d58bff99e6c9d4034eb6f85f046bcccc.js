define(function(require){ // app start
	'use strict';
	
    var Sam = require('./sammy');

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor');

	var	ExampleViewModel = require('example/example-view-model'),
		HeroModule = require('hero/lobby-shell-view-model'),
		LobbyModule = require('lobby/lobby-shell-view-model'),
		UserModule = require('user/user-shell-view-model');

	var AppRegion = require('./views/app-react'),
		AppHeaderRegion = require('./views/app-header-react'),
		AppFooterRegion = require('./views/app-footer-react'),
		AppContentRegion = require('./views/app-content-react');

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
			Sam.loadRoutes(Sammy , self);
            location.assign("#app-shell");
		});
    };

    Application.prototype.LayoutInit = function init_layout($body) {
        var self = this;
        React.render(React.createElement(AppRegion, null) , $body[0]);
        React.render(React.createElement(AppHeaderRegion, null) , $("#app-header-div")[0]);
    };

    Application.prototype.ModifyLayout = function (header , content , footer) {
        var self = this;
        React.render(React.createElement(AppRegion, {Header: header, Content: content, Footer: footer}) , $body[0]);
    };

    Application.prototype.pageNotFound = function (m) {
    	//console.log(a);

    };

	return Application;
});