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

		var TimerExample = React.createClass({displayName: "TimerExample",

    getInitialState: function(){

        // This is called before our render function. The object that is 
        // returned is assigned to this.state, so we can use it later.

        return { elapsed: 0 };
    },

    componentDidMount: function(){

        // componentDidMount is called by react when the component 
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    },

    tick: function(){

        // This function is called every 50 ms. It updates the 
        // elapsed counter. Calling setState causes the component to be re-rendered

        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {
        
        var elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);    

        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return React.createElement("p", null, "This example was started ", React.createElement("b", null, seconds, " seconds"), " ago.");
    }
});

		React.renderComponent(
		    React.createElement(TimerExample, {start: Date.now()}),
		    self.region.element);
	}

	user_shell_vm.prototype.sammyInit = function init_sammy (argument) {
		// body...
		var app = Sammy(function(){

    		});
    			
	}

	return user_shell_vm;
});