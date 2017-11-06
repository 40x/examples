import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';


import { AppComponent } from './app.component';
import {tracker} from "./directives/tracker/tracker.directive";
import {TrackerService} from "./service/tracker/tracker.service";

@NgModule({
    declarations: [
        AppComponent,
        tracker
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule
    ],
    providers: [
        TrackerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
