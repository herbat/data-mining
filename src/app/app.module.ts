import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Register }      from './reg/reg.component';
import { Init }          from './init/init.component';
import { Words }         from './words/words.component';
import { Thanks }        from './thx/thx.component';

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
        Words,
        Thanks
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
