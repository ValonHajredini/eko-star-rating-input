(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('eko-rating-input', ['exports', '@angular/core'], factory) :
    (factory((global['eko-rating-input'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EkoRatingInputService = /** @class */ (function () {
        function EkoRatingInputService() {
        }
        EkoRatingInputService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        EkoRatingInputService.ctorParameters = function () { return []; };
        /** @nocollapse */ EkoRatingInputService.ngInjectableDef = i0.defineInjectable({ factory: function EkoRatingInputService_Factory() { return new EkoRatingInputService(); }, token: EkoRatingInputService, providedIn: "root" });
        return EkoRatingInputService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EkoRatingInputComponent = /** @class */ (function () {
        function EkoRatingInputComponent() {
            this.ratingValue = 0;
            this.fontSize = '42px';
            this.starColor = '#eecb4d';
            this.labelColor = '#999';
            this.rateNumber = false;
            this.editable = true;
            this.ratingValueOutput = new i0.EventEmitter();
            this.stars = {
                starOne: '-o',
                starTwo: '-o',
                starThree: '-o',
                starFour: '-o',
                starFive: '-o'
            };
        }
        /**
         * @return {?}
         */
        EkoRatingInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.value > 0 && this.value < 6) {
                    this.ratingValue = this.value;
                    this.getStarsSelected(this.ratingValue);
                }
                if (this.rateNumber) {
                    this.rateNumberPrev = this.ratingValue;
                }
            };
        /**
         * @param {?} starId
         * @return {?}
         */
        EkoRatingInputComponent.prototype.hoverStar = /**
         * @param {?} starId
         * @return {?}
         */
            function (starId) {
                // this.ratingValue = starId;
                if (this.editable) {
                    this.getStarsSelected(starId);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        EkoRatingInputComponent.prototype.outputValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.editable) {
                    this.getStarsSelected(value);
                    this.ratingValue = value;
                    if (this.rateNumber) {
                        this.rateNumberPrev = this.ratingValue;
                    }
                    return this.ratingValueOutput.emit(value);
                }
                return false;
            };
        /**
         * @param {?} star
         * @return {?}
         */
        EkoRatingInputComponent.prototype.getStarsSelected = /**
         * @param {?} star
         * @return {?}
         */
            function (star) {
                // alert(star);
                switch (star) {
                    case 1: {
                        this.stars.starOne = '';
                        this.stars.starTwo = '-o';
                        this.stars.starThree = '-o';
                        this.stars.starFour = '-o';
                        this.stars.starFive = '-o';
                        break;
                    }
                    case 2: {
                        this.stars.starOne = '';
                        this.stars.starTwo = '';
                        this.stars.starThree = '-o';
                        this.stars.starFour = '-o';
                        this.stars.starFive = '-o';
                        break;
                    }
                    case 3: {
                        this.stars.starOne = '';
                        this.stars.starTwo = '';
                        this.stars.starThree = '';
                        this.stars.starFour = '-o';
                        this.stars.starFive = '-o';
                        break;
                    }
                    case 4: {
                        this.stars.starOne = '';
                        this.stars.starTwo = '';
                        this.stars.starThree = '';
                        this.stars.starFour = '';
                        this.stars.starFive = '-o';
                        break;
                    }
                    case 5: {
                        this.stars.starOne = '';
                        this.stars.starTwo = '';
                        this.stars.starThree = '';
                        this.stars.starFour = '';
                        this.stars.starFive = '';
                        break;
                    }
                    default: {
                        this.stars.starOne = '-o';
                        this.stars.starTwo = '-o';
                        this.stars.starThree = '-o';
                        this.stars.starFour = '-o';
                        this.stars.starFive = '-o';
                        break;
                    }
                }
            };
        /**
         * @return {?}
         */
        EkoRatingInputComponent.prototype.onMouseLeav = /**
         * @return {?}
         */
            function () {
                if (this.ratingValue !== 1 && this.ratingValue !== 2 && this.ratingValue !== 3 && this.ratingValue !== 4 && this.ratingValue !== 5) {
                    this.getStarsSelected(this.ratingValue);
                    // alert(this.ratingValue);
                }
                this.getStarsSelected(this.ratingValue);
            };
        EkoRatingInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'eko-RatingInput',
                        template: "<!--<ng-content></ng-content> -->\n<div class=\"eko-ratting-input-star-block\" >\n  <span class=\"star  star-1 \" (mouseover)=\"hoverStar(1)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(1)\">\n    <i class=\"fa fa-star{{stars.starOne}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star  star-2 \" (mouseover)=\"hoverStar(2)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(2)\">\n    <i class=\"fa fa-star{{stars.starTwo}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star  star-3 \" (mouseover)=\"hoverStar(3)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(3)\">\n    <i class=\"fa fa-star{{stars.starThree}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star \" (mouseover)=\"hoverStar(4)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(4)\">\n    <i class=\"fa fa-star{{stars.starFour}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star \" (mouseover)=\"hoverStar(5)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(5)\">\n    <i class=\"fa fa-star{{stars.starFive}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"set-left-padding\" [style.font-size]=\"fontSize\" [style.color]=\"labelColor\">{{rateNumberPrev}}</span>\n  <span class=\"star\" [style.font-size]=\"fontSize\" [style.color]=\"labelColor\"><ng-content></ng-content></span>\n</div>\n\n",
                        styles: ["span.star i.fa-star-o{cursor:pointer}span.star i.fa-star.gold{color:#ffe835!important}span.star i.fa-star.copper{color:#b87333!important}span.star i.fa-star.silver{color:#c6c6c6!important}span.star{padding:2px}.set-left-padding{padding-left:4px}"]
                    }] }
        ];
        /** @nocollapse */
        EkoRatingInputComponent.ctorParameters = function () { return []; };
        EkoRatingInputComponent.propDecorators = {
            value: [{ type: i0.Input }],
            fontSize: [{ type: i0.Input }],
            starColor: [{ type: i0.Input }],
            labelColor: [{ type: i0.Input }],
            rateNumber: [{ type: i0.Input }],
            editable: [{ type: i0.Input }],
            ratingValueOutput: [{ type: i0.Output }]
        };
        return EkoRatingInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var EkoRatingInputModule = /** @class */ (function () {
        function EkoRatingInputModule() {
        }
        EkoRatingInputModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [EkoRatingInputComponent],
                        imports: [],
                        exports: [EkoRatingInputComponent]
                    },] }
        ];
        return EkoRatingInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.EkoRatingInputService = EkoRatingInputService;
    exports.EkoRatingInputComponent = EkoRatingInputComponent;
    exports.EkoRatingInputModule = EkoRatingInputModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=eko-rating-input.umd.js.map