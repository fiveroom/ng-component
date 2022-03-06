import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';


@Component({
    selector: 'site-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
