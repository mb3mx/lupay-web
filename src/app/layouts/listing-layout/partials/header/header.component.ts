import {Component, HostBinding} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    standalone: false
})
export class HeaderComponent {
  @HostBinding('class') classNames = 'dt-header';

  constructor() {

  }

}
