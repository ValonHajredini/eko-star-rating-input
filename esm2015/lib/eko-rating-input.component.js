/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class EkoRatingInputComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWtvLXJhdGluZy1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9la28tcmF0aW5nLWlucHV0LyIsInNvdXJjZXMiOlsibGliL2Vrby1yYXRpbmctaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyx1QkFBdUI7SUFrQmxDO1FBaEJPLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWQsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixjQUFTLEdBQUcsU0FBUyxDQUFDO1FBQ3RCLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDcEIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3hCLHNCQUFpQixHQUFJLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0MsVUFBSyxHQUFHO1lBQ2IsT0FBTyxFQUFHLElBQUk7WUFDZCxPQUFPLEVBQUcsSUFBSTtZQUNkLFNBQVMsRUFBRSxJQUFJO1lBQ2YsUUFBUSxFQUFFLElBQUk7WUFDZCxRQUFRLEVBQUUsSUFBSTtTQUNmLENBQUM7SUFFYyxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7O0lBQ0QsU0FBUyxDQUFDLE1BQU07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O0lBQ2xELHdDQU1FOztJQUNGLGlEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWtvLVJhdGluZ0lucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Vrby1yYXRpbmctaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZWtvLXJhdGluZy1pbnB1dC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRWtvUmF0aW5nSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyByYXRpbmdWYWx1ZSA9IDA7XG4gIEBJbnB1dCgpIHZhbHVlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGZvbnRTaXplID0gJzQycHgnO1xuICBASW5wdXQoKSBzdGFyQ29sb3IgPSAnI2VlY2I0ZCc7XG4gIEBJbnB1dCgpIGxhYmVsQ29sb3IgPSAnIzk5OSc7XG4gIEBJbnB1dCgpIHJhdGVOdW1iZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgZWRpdGFibGU6IEJvb2xlYW4gPSB0cnVlO1xuICBAT3V0cHV0KCkgcmF0aW5nVmFsdWVPdXRwdXQgPSAgbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgc3RhcnMgPSB7XG4gICAgc3Rhck9uZTogICctbycsXG4gICAgc3RhclR3bzogICctbycsXG4gICAgc3RhclRocmVlOiAnLW8nLFxuICAgIHN0YXJGb3VyOiAnLW8nLFxuICAgIHN0YXJGaXZlOiAnLW8nXG4gIH07XG4gIHB1YmxpYyByYXRlTnVtYmVyUHJldjogbnVtYmVyO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnZhbHVlID4gMCAmJiB0aGlzLnZhbHVlIDwgNikge1xuICAgICAgdGhpcy5yYXRpbmdWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLmdldFN0YXJzU2VsZWN0ZWQodGhpcy5yYXRpbmdWYWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJhdGVOdW1iZXIpIHtcbiAgICAgIHRoaXMucmF0ZU51bWJlclByZXYgPSB0aGlzLnJhdGluZ1ZhbHVlO1xuICAgIH1cbiAgfVxuICBob3ZlclN0YXIoc3RhcklkKSB7XG4gICAgLy8gdGhpcy5yYXRpbmdWYWx1ZSA9IHN0YXJJZDtcbiAgICBpZiAodGhpcy5lZGl0YWJsZSkge1xuICAgICAgdGhpcy5nZXRTdGFyc1NlbGVjdGVkKHN0YXJJZCk7XG4gICAgfVxuXG5cblxuICB9XG4gIG91dHB1dFZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcbiAgICAgIHRoaXMuZ2V0U3RhcnNTZWxlY3RlZCh2YWx1ZSk7XG4gICAgICB0aGlzLnJhdGluZ1ZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAodGhpcy5yYXRlTnVtYmVyKSB7XG4gICAgICAgIHRoaXMucmF0ZU51bWJlclByZXYgPSB0aGlzLnJhdGluZ1ZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmF0aW5nVmFsdWVPdXRwdXQuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcblxuXG4gIH1cbiAgZ2V0U3RhcnNTZWxlY3RlZChzdGFyKSB7XG4gICAgLy8gYWxlcnQoc3Rhcik7XG5cbiAgICBzd2l0Y2ggKCBzdGFyICkge1xuICAgICAgY2FzZSAxOiB7XG4gICAgICAgIHRoaXMuc3RhcnMuc3Rhck9uZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUd28gPSAnLW8nO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUaHJlZSA9ICctbyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhckZvdXIgPSAnLW8nO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGaXZlID0gJy1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDI6IHtcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyT25lID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhclR3byA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUaHJlZSA9ICctbyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhckZvdXIgPSAnLW8nO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGaXZlID0gJy1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDM6IHtcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyT25lID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhclR3byA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUaHJlZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGb3VyID0gJy1vJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyRml2ZSA9ICctbyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSA0OiB7XG4gICAgICAgIHRoaXMuc3RhcnMuc3Rhck9uZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUd28gPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyVGhyZWUgPSAnJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyRm91ciA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGaXZlID0gJy1vJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIDU6IHtcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyT25lID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhclR3byA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJUaHJlZSA9ICcnO1xuICAgICAgICB0aGlzLnN0YXJzLnN0YXJGb3VyID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhckZpdmUgPSAnJztcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHRoaXMuc3RhcnMuc3Rhck9uZSA9ICctbyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhclR3byA9ICctbyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhclRocmVlID0gJy1vJztcbiAgICAgICAgdGhpcy5zdGFycy5zdGFyRm91ciA9ICctbyc7XG4gICAgICAgIHRoaXMuc3RhcnMuc3RhckZpdmUgPSAnLW8nO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Nb3VzZUxlYXYoKSB7XG4gICAgaWYgKHRoaXMucmF0aW5nVmFsdWUgIT09IDEgJiYgdGhpcy5yYXRpbmdWYWx1ZSAhPT0gMiAmJiB0aGlzLnJhdGluZ1ZhbHVlICE9PSAzICYmIHRoaXMucmF0aW5nVmFsdWUgIT09IDQgJiYgdGhpcy5yYXRpbmdWYWx1ZSAhPT0gNSkge1xuICAgICAgdGhpcy5nZXRTdGFyc1NlbGVjdGVkKHRoaXMucmF0aW5nVmFsdWUpO1xuICAgICAgLy8gYWxlcnQodGhpcy5yYXRpbmdWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuZ2V0U3RhcnNTZWxlY3RlZCh0aGlzLnJhdGluZ1ZhbHVlKTtcbiAgfVxuXG59XG4iXX0=