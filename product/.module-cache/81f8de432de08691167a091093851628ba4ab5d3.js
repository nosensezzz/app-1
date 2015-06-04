define(function (require) {
    'use strict';

    var Event = require('system/lang/event');

    function ProductionEvents() {
        this.setProductionAnalysis = new Event();
        this.getProductionAnalysis = new Event();
        this.loadRecommendationPanel = new Event();
        this.routed = new Event();
        this.setActiveLeftNavItem = new Event();
    }

    ProductionEvents.singleton = true;

    ProductionEvents.factory = function () {
        var events = new ProductionEvents();
        return events;
    };

    return ProductionEvents;
});