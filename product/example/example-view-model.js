define(function(require){
	'use strict';

	function login_vm(){

	}

	login_vm.prototype.ready = function _ready() {
		// Initial module...
		var self = this;
		self.region.$element.attr("id", "login-shell");

		var button3 = React.createElement('a' , {href:'/#main3'} , 'button3');
		var	appMainDiv = React.createElement('div' , {id:'example-button'} , button3);
		React.render(appMainDiv, self.region.element);
		// end of example

		_.defer(function(){
			self.sammyInit();
		});
		
	};

	login_vm.prototype.sammyInit = function init_sammy (argument) {
		// body...
		var app = Sammy(function(){

    			this.get("/#main3" , function (argument) {
    				// body...
    				console.log('33333');
    			});

    		});
    			
	}

	return login_vm;
});