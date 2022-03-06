import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'site-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.less'],
    host: {
        "[class.aside-show]": "showAside",
    }
})
export class AsideComponent implements OnInit {

    showAside = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    changeView() {
        this.showAside = !this.showAside;
    }
}
