import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
    standalone: false
})
export class TopbarComponent implements OnInit {
  @HostBinding('class') classNames = 'dt-topbar';

  constructor() { }

  ngOnInit() {
  }

}
