import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestOneComponent} from "./test-one.component";


@NgModule({
    declarations: [
        TestOneComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TestOneComponent
    ]
})
export class TestModule {
}
