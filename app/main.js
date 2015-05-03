define(function(require){
	'use strict';
	window.$ = require("jquery");
	window._ = require("lodash");
	window.React = require("react");

	require(['system/base/object'] , function(){
		require(['application/application'] , function(Application){
			var app = Object.resolve(Application);
			app.init($('body'));
		});

	});

});