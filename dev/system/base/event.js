define(function (require) {
    'use strict';
    var EventBinding = require('./event-binding');

    function Event() {
        this.bindings = [];
    }

    Event.prototype.add = function (handler, context) {
        if (handler === null) { throw 'Event handler must not be null'; }
        if (handler === undefined) { throw 'Event handler must not be undefined'; }
        var args = Array.prototype.slice.call(arguments, 2),
            binding = new EventBinding(handler, context, args);
        this.bindings.push(binding);
        return binding;
    };

    Event.prototype.raise = function () {
        var i,
            args = new Array(arguments.length),
            length = this.bindings.length;
        for (i = 0; i < args.length; i++) {
            args[i] = arguments[i];
        }
        for (i = 0; i !== length; i++) {
            this.bindings[i].execute(args);
        }
    };

    Event.prototype.remove = function (handler, context) {
        if (arguments.length > 1) {
            removeByHandlerAndContext(this, handler, context);
        } else if (arguments.length > 0) {
            context = handler;
            removeByContext(this, context);
        } else {
            removeAll(this);
        }
    };

    function removeByHandlerAndContext(self, handler, context) {
        var i, binding,
            result = [],
            length = self.bindings.length;
        for (i = 0; i !== length; i++) {
            binding = self.bindings[i];
            if (binding.handler !== handler || binding.context !== context) {
                result.push(binding);
            } else {
                binding.dispose();
            }
        }
        self.bindings = result;
    }

    function removeByContext(self, context) {
        var i, binding,
            result = [],
            length = self.bindings.length;
        for (i = 0; i !== length; i++) {
            binding = self.bindings[i];
            if (binding.context !== context) {
                result.push(binding);
            } else {
                binding.dispose();
            }
        }
        self.bindings = result;
    }

    function removeAll(self) {
        var i, length = self.bindings.length;
        for (i = 0; i !== length; i++) {
            self.bindings[i].dispose();
        }
        self.bindings = [];
    }

    return Event;
});