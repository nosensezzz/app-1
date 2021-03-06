define(function (require) {
    'use strict';

    var Event = require('system/base/event');

    function ApplicationEvent() {
        this.SetApplicationHeader = new Event();
    }

    ApplicationEvent.singleton = true;

    ApplicationEvent.factory = function () {
        var events = new ApplicationEvent();
        return events;
    };

    return ApplicationEvent;
});