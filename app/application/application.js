define(function(require){
	'use strict';
	
	var Region = require('system/spa/region');
	var Conductor = require('system/spa/conductor');

	var	ExampleViewModel = require('example/example-view-model');

	function Application(conductor){
		this.conductor = new Conductor();

		this.region = Object.resolve(Region);

		console.log(this.conductor);
	}

	Application.prototype.init = function attach($body) {
		var self = this,
			example_vm = Object.resolve(ExampleViewModel);
		self.region.setElement($body.find($("#app-main")));
		self.region.screen = self;

		// goto user login 
		self.conductor.append(self, self.region , example_vm);
		
    };

    Application.prototype.activate = function activate() {
        
    };

    Application.prototype.test = function test(){
    	console.log();

    };

	return Application;
});