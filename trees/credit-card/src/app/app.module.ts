import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ID3 } from '../utils/id3';

import { AppComponent } from './app.component';
import {TreeView} from "../utils/treeview/treeview";

@NgModule({
    declarations: [
        AppComponent,
        TreeView
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        ID3
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
