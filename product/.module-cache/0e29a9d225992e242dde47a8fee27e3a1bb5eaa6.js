define(function(require){
	'use strict';

	var Region = require('system/spa/region'),
		Conductor = require('system/spa/conductor');

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

		var api = React.createClass({displayName: "api",
			clickHandler: function (e) {
				alert();			
			},

			render: function(){
				var a = 'self';
				return (
					React.createElement("div", {onClick: this.clickHandler}, a)
					);
			}
		});

		React.render(
			React.createElement("div", null, 
				"user module", 
				React.createElement("button", null, "api")
			)
			, self.region.element);
	}

	user_shell_vm.prototype.sammyInit = function init_sammy (argument) {
		// body...
		var app = Sammy(function(){

    		});
    			
	}

	return user_shell_vm;
});