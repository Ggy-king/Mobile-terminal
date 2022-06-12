function Slider(el, options) {
    var defaults = {
        initIndex: 0,
        speed: 300,
        hasIndicator: false
    };
    this.options = {};
    this.options.initIndex = typeof options.initIndex !== 'undefined' ? options.initIndex : defaults.initIndex;
    this.options.speed = typeof options.speed !== 'undefined' ? options.speed : defaults.speed;
    this.options.hasIndicator = typeof options.hasIndicator !== 'undefined' ? options.hasIndicator : defaults.hasIndicator;

    this.el = el;
    this.itemContainer = el.querySelector('.slider-item-container');
    this.items = this.itemContainer.children;
    this.distancePerSlide = this.items[0].offsetWidth;

    this.minIndex = 0;
    this.maxIndex = this.items.length - 1;
    // this.index = this.options.initIndex;
    this.index = this._adjustIndex(this.options.initIndex);

    this.move(this.getDistanceByIndex(this.index));

    if (this.options.hasIndicator) {
        this._createIndicators();
        this._setIndicatorActive(this.index);
    }
}
Slider.prototype.to = function (index, cb) {
    this.index = index;

    this._setTransitionSpeed(this.options.speed);
    this.move(this.getDistanceByIndex(this.index));

    var self = this;
    this.itemContainer.addEventListener('transitionend', function () {
        self._setTransitionSpeed(0);

        if (typeof cb === 'function') {
            cb();
        }
    }, false);

    if (this.options.hasIndicator) {
        this._setIndicatorActive(this.index);
    }
};
Slider.prototype._setTransitionSpeed = function (speed) {
    this.itemContainer.style.transitionDuration = speed + 'ms';
};
Slider.prototype.prev = function (cb) {
    this.to(this.index - 1, cb);
};
Slider.prototype.next = function (cb) {
    this.to(this.index + 1, cb);
};
Slider.prototype._adjustIndex = function (index) {
    if (index < this.minIndex) {
        index = this.minIndex;
    } else if (index > this.maxIndex) {
        index = this.maxIndex;
    }

    return index;
};
Slider.prototype.move = function (distance) {
    this.itemContainer.style.transform = 'translate3d(' + distance + 'px, 0, 0)';
};
Slider.prototype.getDistanceByIndex = function (index) {
    return -index * this.distancePerSlide;
};
Slider.prototype._createIndicators = function () {
    var indicatorContainer = document.createElement('div');
    var html = '';

    indicatorContainer.className = 'slider-indicator-container';
    for (var i = 0; i <= this.maxIndex; i++) {
        html += '<span class="slider-indicator"></span>';
    }
    indicatorContainer.innerHTML = html;
    this.el.appendChild(indicatorContainer);
};
Slider.prototype._setIndicatorActive = function (index) {
    this.indicators = this.indicators || this.el.querySelectorAll('.slider-indicator');
    for (var i = 0; i < this.indicators.length; i++) {
        this.indicators[i].classList.remove('slider-indicator-active');
    }

    this.indicators[index].classList.add('slider-indicator-active');
};

Slider.prototype.getItemContainer = function () {
    return this.itemContainer;
};
Slider.prototype.getIndex = function () {
    return this.index;
};
Slider.prototype.getDistancePerSlide = function () {
    return this.distancePerSlide;
};
