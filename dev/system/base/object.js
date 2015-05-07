define(function () {
    'use strict';

    function construct(ctor){
    	return new (Function.prototype.bind.apply(ctor , arguments));
    }

    function resolve(ctor){
    	if(ctor.singleton && ctor.instance){
    		return ctor.instance;
    	}

    	var instance,
    		params = Array.prototype.slice.call(arguments, 1); // 额外的参数

    	if(ctor.factory && _.isFunction(ctor.factory)){
    		instance = ctor.factory();
    	} else {
    		var dependencies = ctor.dependsOn || [],
    			args = _.map(dependencies , function(dependency){
    				return resolve(dependency);
    			});

    		args.unshift(ctor);
    		args = args.concat(params);
    		instance = construct.apply(null , args);
    	}

    	if(ctor.singleton){
    		ctor.instance = instance;
    	}

    	return instance;
    }

    var functions = {
    	construct: construct,
    	resolve: resolve,
    };

    $.extend(Object, functions);
});