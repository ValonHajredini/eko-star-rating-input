README.md
Install `eko-rating-input` from `npm`:
```bash
npm i eko-rating-input --save
```
this package neads to have ```fontawsome``` installed.
<h2 style="color: blue"><a href="https://valonhajredini.github.io/angularNPMLibGenerator/">Click to se Demo</a></h2>

Add needed package to NgModule imports:
```js
import { EkoRatingInputModule } from 'eko-rating-input.module';

@NgModule({
  ...
  imports: [
  ...,
  EkoRatingInputModule,
  ...
  ]
  ...
})
```
To app.component.ts create the function to get data from eko-rating-input input
```js
export class AppComponent {
...
public ratingValue: number;
...
  getRattingValue(e) {
    console.log('Rating input value: ', e);
    this.ratingValue = e;
  }
...
}
```
To  app.component.html add :
```html
<eko-RatingInput
  (ratingValueOutput)="getRattingValue($event)" // Get value from the clicked star 
  [starColor]="'gold'"
  [labelColor]="'#999'"
  [fontSize]="'28px'"
  [rateNumber]="true"
>Star Ratting</eko-RatingInput>
```
or if you wane display values from 1 to 5 in star ra ting do this: 
```html
<eko-RatingInput
  [starColor]="'gold'"
  [labelColor]="'#999'"
  [fontSize]="'28px'"
  [editable]="false"
  [rateNumber]="true"
  [value]="3"   // Here comes the value of rating 
>Star Ratting</eko-RatingInput>
```
or just for preview rating:

```
<eko-RatingInput
  [fontSize]="'16px'"
  [editable]="false"
  [value]="4"
></eko-RatingInput>
```
if you write  `[rateNumber]="false"` the star preview will not show the star number. 
