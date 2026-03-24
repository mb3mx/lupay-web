import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'gx-online-user-list-card',
    templateUrl: './gx-online-user-list-card.component.html',
    standalone: false
})
export class GxOnlineUserListCardComponent implements OnInit{
    @Input() userList: Array<Object>;
    @Input() limit: number;

    constructor() {
    }

    ngOnInit(): void {
    }
}
