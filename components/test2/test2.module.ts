import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestTwoComponent} from "./test-two.component";


@NgModule({
    declarations: [
        TestTwoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        TestTwoComponent
    ]
})
export class Test2Module {
}
