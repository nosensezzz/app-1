define(function () {
    'use strict';

    function EventBinding(handler, context, args) {
        this.handler = handler;
        this.context = context;
        this.args = args || [];
    }

    EventBinding.prototype.execute = function (args) {
        args = this.args.concat(args);
        this.handler.apply(this.context, args);
    };

    EventBinding.prototype.dispose = function () {
        this.handler = null;
        this.context = null;
        this.args = null;
    };

    return EventBinding;
});
