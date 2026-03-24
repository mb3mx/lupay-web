import {Component, HostBinding, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-nav-vertical-group',
    templateUrl: './nav-group.component.html',
    styleUrls: ['./nav-group.component.scss'],
    standalone: false
})
export class NavVerticalGroupComponent implements OnInit {
  @HostBinding('class') classes = 'nav-group';
  @Input() item: any;

  constructor() { }

  ngOnInit() {
  }

}
