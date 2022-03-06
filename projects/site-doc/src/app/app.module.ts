import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from "./head/head.component";
import { AsideComponent } from "./aside/aside.component";
import { TestDocComponent } from "component-angular/test-doc/test.doc.component";


@NgModule({
    declarations: [
        AppComponent,
        HeadComponent,
        AsideComponent,
        TestDocComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
