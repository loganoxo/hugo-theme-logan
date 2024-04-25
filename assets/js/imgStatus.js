/*!
   --------------------------------
   imgStatus.js
   --------------------------------
   + https://github.com/raphamorim/imgstatus
   + version 0.1.2
   + Copyright 2015 Raphael Amorim
   + Licensed under the MIT license
   + Documentation: https://github.com/raphamorim/imgstatus
*/

class ImgStatus {
    constructor() {
        this.loaded = 0;
        this.failed = 0;
        this.total = 0;
    }

    watch(selector, fn) {
        var images = document.querySelectorAll(selector);
        if (!images.length)
            return console.log('[imgStatus]: There aren\'t any images associated with this selector (' + selector + ')!');

        this.total = images.length;
        var setLoadedHandler = this.setLoaded.bind(this, fn);
        var setFailedHandler = this.setFailed.bind(this, fn);
        for (var i = 0; i < this.total; i++) {
            var image = images[i];
            if (this.isCached(image.src)) {
                this.setLoaded(fn);
            } else if (typeof window.addEventListener === 'function') {
                image.addEventListener('load', setLoadedHandler);
                image.addEventListener('error', setFailedHandler);
            } else if (image.attachEvent) {
                image.attachEvent('onload', setLoadedHandler);
                image.attachEvent('onerror', setFailedHandler);
            }
        }
    }

    isCached(src) {
        var image = new Image();
        image.src = src;
        return image.complete;
    }

    setFailed(fn, e) {
        ++this.failed;
        if (typeof fn === "function")
            fn(this);
    }

    setLoaded(fn, e) {
        ++this.loaded;
        if (typeof fn === "function")
            fn(this);
    };

    isDone() {
        return (this.loaded + this.failed) === this.total;
    }
}