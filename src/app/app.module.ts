import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Register }      from './reg/reg.component';
import { Init }          from './init/init.component';
import { Words }         from './words/words.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        Register,
        Init,
        Words
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
