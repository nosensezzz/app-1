define(function(require){
	'use strict';

	function login_vm(){

	}

	login_vm.prototype.ready = function _ready() {
		// body...
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
		React.render(React.createElement(Timer, null), self.region.element);
		// end of example
	};

	return login_vm;
});