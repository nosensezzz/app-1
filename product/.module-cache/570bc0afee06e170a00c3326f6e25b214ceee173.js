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

		var LikeButton = React.createClass({displayName: "LikeButton",
		  getInitialState: function() {
		    return {liked: false};
		  },
		  handleClick: function(event) {
		    this.setState({liked: !this.state.liked});
		    $.get('localhost:3001', function(result) {
		    	console.log(result);
		    });

		  },
		  render: function() {
		    var text = this.state.liked ? 'like' : 'haven\'t liked';
		    return (
		      React.createElement("p", {onClick: this.handleClick}, 
		        "You ", text, " this. Click to toggle."
		      )
		    );
		  }
		});

		React.render(React.createElement(LikeButton, null)	, self.region.element);
	}

	user_shell_vm.prototype.sammyInit = function init_sammy (argument) {
		// body...
		var app = Sammy(function(){

    		});
    			
	}

	return user_shell_vm;
});