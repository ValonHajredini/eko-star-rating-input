import { OnInit, EventEmitter } from '@angular/core';
export declare class EkoRatingInputComponent implements OnInit {
    ratingValue: number;
    value: number;
    fontSize: string;
    starColor: string;
    labelColor: string;
    rateNumber: boolean;
    editable: Boolean;
    ratingValueOutput: EventEmitter<{}>;
    stars: {
        starOne: string;
        starTwo: string;
        starThree: string;
        starFour: string;
        starFive: string;
    };
    rateNumberPrev: number;
    constructor();
    ngOnInit(): void;
    hoverStar(starId: any): void;
    outputValue(value: any): false | void;
    getStarsSelected(star: any): void;
    onMouseLeav(): void;
}
