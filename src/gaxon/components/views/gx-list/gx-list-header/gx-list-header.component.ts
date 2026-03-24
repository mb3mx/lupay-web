import {Component} from '@angular/core';

@Component({
    selector: 'gx-list-header',
    template: `<ng-content></ng-content>`,
    styles: [':host{display: block;}'],
    standalone: false
})
export class GxListHeaderComponent {

  constructor() { }

}
