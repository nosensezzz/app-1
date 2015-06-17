define(function () {
    'use strict';

    var Region = require('system/spa/region');

    function Conduction(element, transition) {

    }

    Conduction.prototype.append = function append(parent , parentRegion ,child , childRegion , stay) {
        var self = this;
        if(!childRegion){
            var childRegion = Object.resolve(Region),
                newReactElement = React.createElement("div" , {className:"region" , id: "_region"});

            parentRegion.$element.empty();

            React.render(newReactElement,parentRegion.element);
            childRegion.setElement(parentRegion.$element.find($("#_region")));
            childRegion.screen = child;

            child.region = childRegion;
        } else {
            child.region = childRegion;
            childRegion.screen = child;
        }

        child.ready(parent , child);
    };

    return Conduction;
});