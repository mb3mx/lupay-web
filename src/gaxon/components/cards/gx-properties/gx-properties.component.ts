import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'gx-properties',
    templateUrl: './gx-properties.component.html',
    styleUrls: ['./gx-properties.component.scss'],
    standalone: false
})
export class GxPropertiesComponent implements OnInit {
  @Input('card-title') cardTitle: string;
  @Input() properties: any[];

  constructor() {
  }

  ngOnInit() {
  }

}
