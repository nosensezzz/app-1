define(function () {
    'use strict';

    function Region(element, transition) {
        this.element = null;
        this.$element = null;
        this.setElement(element);
        this.transition = transition || '';
        this.activeContainer = null;
        this.screen = null;
    }

    Region.prototype.setElement = function region_setElement(element) {
        element = element || document.createElement('div');
        this.element = element instanceof $ ? element.get(0) : element;
        this.$element = element instanceof $ ? element : $(element);
        this.$element.empty();
    };

    Region.prototype.attach = function region_attach(element) {
        this.clear();
        this.activeContainer = document.createElement('div');
        $(this.activeContainer).addClass('region');
        $(this.activeContainer).append(element);
        applyTransition(this, this.activeContainer, this.transition);

        if (this.element.nodeType === 8) {
            this.$element.after(this.activeContainer);
        } else {
            this.element.appendChild(this.activeContainer);
        }
    };

    Region.prototype.clear = function region_clear() {
        if (!this.activeContainer) { return; }
        $(this.activeContainer).remove();
        this.activeContainer = null;
        this.$element.empty();
    };

    function applyTransition(self, container, transition) {
        if (transition) {
            $(container).addClass('animated ' + self.transition);
        }
    }

    return Region;
});