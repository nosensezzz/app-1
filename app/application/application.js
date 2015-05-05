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
			contentRegion = Object.resolve(Region),
			example_vm = Object.resolve(ExampleViewModel);

		self.LayoutInit($body);

		self.region.setElement($body.find($("#app-main")));
		self.region.screen = self;
		contentRegion.setElement(self.region.$element.find($("#app-content")));

		// sammy
		_.defer(function(){
			self.sammyInit();
		});

		//set content region
		self.conductor.append(self, contentRegion, example_vm);


		
    };

    Application.prototype.sammyInit = function init_sammy(){
    	var self = this,
    		app = Sammy(function(){
    			this.get("/#main" , function (argument) {
    				// body...
    				console.log('sammy');
    			});

    			this.notFound = function not_found (argument) {
    				// body...
    			}
    		});

    		app.run("");
    };

    Application.prototype.LayoutInit = function init_layout($body) {
        var self = this;

		var headerDiv = React.createElement('div' , {className:'app-header-div'} , 'header'),
			button = React.createElement('a' , {href:'/#main'} , 'button'),
			footerDiv = React.createElement('div' , {className:'app-footer-div'} , 'footer' , button),
			contentDiv = React.createElement('div' , {className:'app-content-div' , id:'app-content'});

		var	appMainDiv = React.createElement('div' , {id:'app-main'} , headerDiv , contentDiv , footerDiv);

        React.render(appMainDiv , $body[0]);
    };

	return Application;
});

/*
var child1 = React.createElement('li', null, 'First Text Content');
var child2 = React.createElement('li', null, 'Second Text Content');
var root = React.createElement('ul', { className: 'my-list' }, child1, child2);
React.render(root, document.getElementById('example'));
*/