/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var EkoRatingInputComponent = /** @class */ (function () {
    function EkoRatingInputComponent() {
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
        { type: Component, args: [{
                    selector: 'eko-RatingInput',
                    template: "<!--<ng-content></ng-content> -->\n<div class=\"eko-ratting-input-star-block\" >\n  <span class=\"star  star-1 \" (mouseover)=\"hoverStar(1)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(1)\">\n    <i class=\"fa fa-star{{stars.starOne}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star  star-2 \" (mouseover)=\"hoverStar(2)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(2)\">\n    <i class=\"fa fa-star{{stars.starTwo}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star  star-3 \" (mouseover)=\"hoverStar(3)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(3)\">\n    <i class=\"fa fa-star{{stars.starThree}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star \" (mouseover)=\"hoverStar(4)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(4)\">\n    <i class=\"fa fa-star{{stars.starFour}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"star \" (mouseover)=\"hoverStar(5)\" (mouseleave)=\"onMouseLeav()\" (click)=\"outputValue(5)\">\n    <i class=\"fa fa-star{{stars.starFive}} \" [style.font-size]=\"fontSize\" [style.color]=\"starColor\"></i>\n  </span>\n  <span class=\"set-left-padding\" [style.font-size]=\"fontSize\" [style.color]=\"labelColor\">{{rateNumberPrev}}</span>\n  <span class=\"star\" [style.font-size]=\"fontSize\" [style.color]=\"labelColor\"><ng-content></ng-content></span>\n</div>\n\n",
                    styles: ["span.star i.fa-star-o{cursor:pointer}span.star i.fa-star.gold{color:#ffe835!important}span.star i.fa-star.copper{color:#b87333!important}span.star i.fa-star.silver{color:#c6c6c6!important}span.star{padding:2px}.set-left-padding{padding-left:4px}"]
                }] }
    ];
    /** @nocollapse */
    EkoRatingInputComponent.ctorParameters = function () { return []; };
    EkoRatingInputComponent.propDecorators = {
        value: [{ type: Input }],
        fontSize: [{ type: Input }],
        starColor: [{ type: Input }],
        labelColor: [{ type: Input }],
        rateNumber: [{ type: Input }],
        editable: [{ type: Input }],
        ratingValueOutput: [{ type: Output }]
    };
    return EkoRatingInputComponent;
}());
export { EkoRatingInputComponent };
if (false) {
    /** @type {?} */
    EkoRatingInputComponent.prototype.ratingValue;
    /** @type {?} */
    EkoRatingInputComponent.prototype.value;
    /** @type {?} */
    EkoRatingInputComponent.prototype.fontSize;
    /** @type {?} */
    EkoRatingInputComponent.prototype.starColor;
    /** @type {?} */
    EkoRatingInputComponent.prototype.labelColor;
    /** @type {?} */
    EkoRatingInputComponent.prototype.rateNumber;
    /** @type {?} */
    EkoRatingInputComponent.prototype.editable;
    /** @type {?} */
    EkoRatingInputComponent.prototype.ratingValueOutput;
    /** @type {?} */
    EkoRatingInputComponent.prototype.stars;
    /** @type {?} */
    EkoRatingInputComponent.prototype.rateNumberPrev;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvLXJhdGluZy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9la28tcmF0aW5nLWlucHV0LyIsInNvdXJjZXMiOlsibGliL2Vrby1yYXRpbmctaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FO0lBdUJFO1FBaEJPLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWQsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0MsVUFBSyxHQUFHO1lBQ2IsT0FBTyxFQUFHLElBQUk7WUFDZCxPQUFPLEVBQUcsSUFBSTtZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7SUFFYyxDQUFDOzs7O0lBRWpCLDBDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekM7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Ozs7SUFDRCwyQ0FBUzs7OztJQUFULFVBQVUsTUFBTTtR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O0lBQzNCLDRDQUErQjs7SUFDL0IsNkNBQTZCOztJQUM3Qiw2Q0FBNEI7O0lBQzVCLDJDQUFrQzs7SUFDbEMsb0RBQWtEOztJQUNsRCx3Q0FNRTs7SUFDRixpREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Vrby1SYXRpbmdJbnB1dCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9la28tcmF0aW5nLWlucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Vrby1yYXRpbmctaW5wdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVrb1JhdGluZ0lucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwdWJsaWMgcmF0aW5nVmFsdWUgPSAwO1xuICBASW5wdXQoKSB2YWx1ZTogbnVtYmVyO1xuICBASW5wdXQoKSBmb250U2l6ZSA9ICc0MnB4JztcbiAgQElucHV0KCkgc3RhckNvbG9yID0gJyNlZWNiNGQnO1xuICBASW5wdXQoKSBsYWJlbENvbG9yID0gJyM5OTknO1xuICBASW5wdXQoKSByYXRlTnVtYmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBCb29sZWFuID0gdHJ1ZTtcbiAgQE91dHB1dCgpIHJhdGluZ1ZhbHVlT3V0cHV0ID0gIG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIHN0YXJzID0ge1xuICAgIHN0YXJPbmU6ICAnLW8nLFxuICAgIHN0YXJUd286ICAnLW8nLFxuICAgIHN0YXJUaHJlZTogJy1vJyxcbiAgICBzdGFyRm91cjogJy1vJyxcbiAgICBzdGFyRml2ZTogJy1vJ1xuICB9O1xuICBwdWJsaWMgcmF0ZU51bWJlclByZXY6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA+IDAgJiYgdGhpcy52YWx1ZSA8IDYpIHtcbiAgICAgIHRoaXMucmF0aW5nVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy5nZXRTdGFyc1NlbGVjdGVkKHRoaXMucmF0aW5nVmFsdWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yYXRlTnVtYmVyKSB7XG4gICAgICB0aGlzLnJhdGVOdW1iZXJQcmV2ID0gdGhpcy5yYXRpbmdWYWx1ZTtcbiAgICB9XG4gIH1cbiAgaG92ZXJTdGFyKHN0YXJJZCkge1xuICAgIC8vIHRoaXMucmF0aW5nVmFsdWUgPSBzdGFySWQ7XG4gICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgIHRoaXMuZ2V0U3RhcnNTZWxlY3RlZChzdGFySWQpO1xuICAgIH1cblxuXG5cbiAgfVxuICBvdXRwdXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmVkaXRhYmxlKSB7XG4gICAgICB0aGlzLmdldFN0YXJzU2VsZWN0ZWQodmFsdWUpO1xuICAgICAgdGhpcy5yYXRpbmdWYWx1ZSA9IHZhbHVlO1xuICAgICAgaWYgKHRoaXMucmF0ZU51bWJlcikge1xuICAgICAgICB0aGlzLnJhdGVOdW1iZXJQcmV2ID0gdGhpcy5yYXRpbmdWYWx1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJhdGluZ1ZhbHVlT3V0cHV0LmVtaXQodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG5cblxuICB9XG4gIGdldFN0YXJzU2VsZWN0ZWQoc3Rhcikge1xuICAgIC8vIGFsZXJ0KHN0YXIpO1xuXG4gICAgc3dpdGNoICggc3RhciApIHtcbiAgICAgIGNhc2UgMToge1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJPbmUgPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyVHdvID0gJy1vJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyVGhyZWUgPSAnLW8nO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGb3VyID0gJy1vJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyRml2ZSA9ICctbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAyOiB7XG4gICAgICAgIHRoaXMuc3RhcnMuc3Rhck9uZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUd28gPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyVGhyZWUgPSAnLW8nO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGb3VyID0gJy1vJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyRml2ZSA9ICctbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOiB7XG4gICAgICAgIHRoaXMuc3RhcnMuc3Rhck9uZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUd28gPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyVGhyZWUgPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyRm91ciA9ICctbyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhckZpdmUgPSAnLW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgNDoge1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJPbmUgPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyVHdvID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhclRocmVlID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhckZvdXIgPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyRml2ZSA9ICctbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA1OiB7XG4gICAgICAgIHRoaXMuc3RhcnMuc3Rhck9uZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUd28gPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyVGhyZWUgPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyRm91ciA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGaXZlID0gJyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJPbmUgPSAnLW8nO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUd28gPSAnLW8nO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUaHJlZSA9ICctbyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhckZvdXIgPSAnLW8nO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGaXZlID0gJy1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTW91c2VMZWF2KCkge1xuICAgIGlmICh0aGlzLnJhdGluZ1ZhbHVlICE9PSAxICYmIHRoaXMucmF0aW5nVmFsdWUgIT09IDIgJiYgdGhpcy5yYXRpbmdWYWx1ZSAhPT0gMyAmJiB0aGlzLnJhdGluZ1ZhbHVlICE9PSA0ICYmIHRoaXMucmF0aW5nVmFsdWUgIT09IDUpIHtcbiAgICAgIHRoaXMuZ2V0U3RhcnNTZWxlY3RlZCh0aGlzLnJhdGluZ1ZhbHVlKTtcbiAgICAgIC8vIGFsZXJ0KHRoaXMucmF0aW5nVmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLmdldFN0YXJzU2VsZWN0ZWQodGhpcy5yYXRpbmdWYWx1ZSk7XG4gIH1cblxufVxuIl19