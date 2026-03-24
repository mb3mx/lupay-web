import { Component } from '@angular/core';

@Component({
    selector: 'gx-grid-footer',
    template: `<ng-content></ng-content>`,
    styles: [':host{display: block;}'],
    standalone: false
})
export class GxGridFooterComponent {

  constructor() { }
}
