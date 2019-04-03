import { Injectable, NgModule, Component, Input, Output, EventEmitter, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EkoRatingInputService {
    constructor() { }
}
EkoRatingInputService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
EkoRatingInputService.ctorParameters = () => [];
/** @nocollapse */ EkoRatingInputService.ngInjectableDef = defineInjectable({ factory: function EkoRatingInputService_Factory() { return new EkoRatingInputService(); }, token: EkoRatingInputService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EkoRatingInputComponent {
    constructor() {
        this.ratingValue = 0;
        this.fontSize = '42px';
        this.starColor = '#eecb4d';
        this.labelColor = '#999';
        this.rateNumber = false;
        this.editable = true;
        this.ratingValueOutput = new EventEmitter();
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
    ngOnInit() {
        if (this.value > 0 && this.value < 6) {
            this.ratingValue = this.value;
            this.getStarsSelected(this.ratingValue);
        }
        if (this.rateNumber) {
            this.rateNumberPrev = this.ratingValue;
        }
    }
    /**
     * @param {?} starId
     * @return {?}
     */
    hoverStar(starId) {
        // this.ratingValue = starId;
        if (this.editable) {
            this.getStarsSelected(starId);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    outputValue(value) {
        if (this.editable) {
            this.getStarsSelected(value);
            this.ratingValue = value;
            if (this.rateNumber) {
                this.rateNumberPrev = this.ratingValue;
            }
            return this.ratingValueOutput.emit(value);
        }
        return false;
    }
    /**
     * @param {?} star
     * @return {?}
     */
    getStarsSelected(star) {
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
    }
    /**
     * @return {?}
     */
    onMouseLeav() {
        if (this.ratingValue !== 1 && this.ratingValue !== 2 && this.ratingValue !== 3 && this.ratingValue !== 4 && this.ratingValue !== 5) {
            this.getStarsSelected(this.ratingValue);
            // alert(this.ratingValue);
        }
        this.getStarsSelected(this.ratingValue);
    }
}
EkoRatingInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'eko-RatingInput',
                template: "<!--<ng-content></ng-content> -->\n<div class=\"eko-ratting-input-star-block\" >\n  <span class=\"star  star-1 \" (mouseover)=\"hoverStar(1)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(1)\">\n    <i class=\"fa fa-star{{stars.starOne}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star  star-2 \" (mouseover)=\"hoverStar(2)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(2)\">\n    <i class=\"fa fa-star{{stars.starTwo}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star  star-3 \" (mouseover)=\"hoverStar(3)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(3)\">\n    <i class=\"fa fa-star{{stars.starThree}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star \" (mouseover)=\"hoverStar(4)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(4)\">\n    <i class=\"fa fa-star{{stars.starFour}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star \" (mouseover)=\"hoverStar(5)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(5)\">\n    <i class=\"fa fa-star{{stars.starFive}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"set-left-padding\" [style.font-size]=\"fontSize\" [style.color]=\"labelColor\">{{rateNumberPrev}}</span>\n  <span class=\"star\" [style.font-size]=\"fontSize\" [style.color]=\"labelColor\"><ng-content></ng-content></span>\n</div>\n\n",
                styles: ["span.star i.fa-star-o{cursor:pointer}span.star i.fa-star.gold{color:#ffe835!important}span.star i.fa-star.copper{color:#b87333!important}span.star i.fa-star.silver{color:#c6c6c6!important}span.star{padding:2px}.set-left-padding{padding-left:4px}"]
            }] }
];
/** @nocollapse */
EkoRatingInputComponent.ctorParameters = () => [];
EkoRatingInputComponent.propDecorators = {
    value: [{ type: Input }],
    fontSize: [{ type: Input }],
    starColor: [{ type: Input }],
    labelColor: [{ type: Input }],
    rateNumber: [{ type: Input }],
    editable: [{ type: Input }],
    ratingValueOutput: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class EkoRatingInputModule {
}
EkoRatingInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EkoRatingInputComponent],
                imports: [],
                exports: [EkoRatingInputComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { EkoRatingInputService, EkoRatingInputComponent, EkoRatingInputModule };

//# sourceMappingURL=eko-rating-input.js.map