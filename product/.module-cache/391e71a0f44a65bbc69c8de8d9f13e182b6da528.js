define(function (require) {
    'use strict';

    var Event = require('system/lang/event');

    function ApplicationEvent() {
        this.setProductionAnalysis = new Event();
        this.getProductionAnalysis = new Event();
        this.loadRecommendationPanel = new Event();
        this.routed = new Event();
        this.setActiveLeftNavItem = new Event();
    }

    ApplicationEvent.singleton = true;

    ApplicationEvent.factory = function () {
        var events = new ApplicationEvent();
        return events;
    };

    return ApplicationEvent;
});