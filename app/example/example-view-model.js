define(function(require){
	'use strict';

	function login_vm(){

	}

	login_vm.prototype.ready = function _ready() {
		// Initial module...
		var self = this;
		self.region.$element.attr("id", "login-shell");

		// example
		var Timer = React.createClass({displayName: "Timer",
		  getInitialState: function() {
		    return {secondsElapsed: 0};
		  },
		  tick: function() {
		    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
		  },
		  componentDidMount: function() {
		    this.interval = setInterval(this.tick, 1000);
		  },
		  componentWillUnmount: function() {
		    clearInterval(this.interval);
		  },
		  render: function() {
		    return (
		      React.createElement("div", null, "Seconds Elapsed: ", this.state.secondsElapsed)
		    );
		  }
		});


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

    			this.get("main3" , function (argument) {
    				// body...
    				console.log('33333');
    			});

    		});

    		app.run("/#");
    			
	}

	return login_vm;
});