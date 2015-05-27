define(function(require){
	'use strict';
	window.$ = require("jquery");
	window._ = require("lodash");
	window.React = require("react");
	window.Sammy = require('sammy');

	window._scale = document.body.clientWidth / 1000;

	document.getElementById("viewport").setAttribute("content",
      "initial-scale=" + window._scale + "; maximum-scale=1.0; user-scalable=0;");

	require(['system/base/object'] , function(){
		require(['application/application'] , function(Application){
			var app = Object.resolve(Application);
			app.init($('body'));
		});

	});

});