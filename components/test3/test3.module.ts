import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test3TComponent } from './test3-t.component';

import { Test2Module } from "component-angular/test2";


@NgModule({
    declarations: [
        Test3TComponent
    ],
    imports: [
        CommonModule,
        Test2Module
    ],
    exports: [
        Test3TComponent
    ]
})
export class Test3Module {
}
