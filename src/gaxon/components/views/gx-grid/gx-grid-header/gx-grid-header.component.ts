import {Component} from '@angular/core';

@Component({
    selector: 'gx-grid-header',
    template: `<ng-content></ng-content>`,
    styles: [':host{display: block;}'],
    standalone: false
})
export class GxGridHeaderComponent {

  constructor() {
  }

}
