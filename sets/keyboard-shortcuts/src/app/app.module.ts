import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routes, navigatableComponents} from "./app.routing";
import {RouterModule} from "@angular/router";
import {MdButtonModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        BrowserAnimationsModule,

        // material

        MdButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
