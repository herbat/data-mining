import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { Register }      from './reg/reg.component';
import { Init }          from './init/init.component';
import { Words }         from './words/words.component';
import { Thanks }        from './thx/thx.component';

@NgModule({
    imports:      [
        FormsModule,
        BrowserModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    declarations: [
        AppComponent,
        Register,
        Init,
        Words,
        Thanks
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
