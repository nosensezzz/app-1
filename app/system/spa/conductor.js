define(function () {
    'use strict';

    var Region = require('system/spa/region');

    function Conduction(element, transition) {

    }

    Conduction.prototype.append = function append(parent , parentRegion ,child , childRegion) {
        var self = this;
   
        if(!childRegion){
            var childRegion = Object.resolve(Region),
                newReactElement = React.createElement("div" , {className:"region" , id: "_region"});

            React.render(newReactElement,parentRegion.element);

            childRegion.setElement(parentRegion.$element.find($("#_region")));
            child.region = childRegion;
            childRegion.screen = child;
        } else {
            child.region = childRegion;
            childRegion.screen = child;
        }

        child.ready();
    };

    return Conduction;
});