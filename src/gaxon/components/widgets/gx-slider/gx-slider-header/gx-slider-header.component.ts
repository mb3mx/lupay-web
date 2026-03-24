import {Component, ElementRef} from '@angular/core';

@Component({
    selector: 'gx-slider-header',
    template: `<ng-content></ng-content>`,
    styles: [':host{display: block;}'],
    standalone: false
})
export class GxSliderHeaderComponent {

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add('dt-slider__header');
  }

}
