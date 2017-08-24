import { Component } from '@angular/core';
import { User } from './reg/reg.component';

@Component ({
    selector : 'app-root',
    template: `<h1 id="title"> {{title}} </h1>
               <init  [hidden]="!initOpen"  (onRegStart)   = "onRegStart()"></init>
               <reg   [hidden]="!regOpen"   (onWordsStart) = "onWordsStart($event)"></reg>
               <words [hidden]="!wordsOpen" (onWordsDone)  = "onWordsDone($event)"></words>
                `
})

export class AppComponent {
    title = "Five Words";
    initOpen   = true;
    regOpen    = false;
    wordsOpen  = false;
    thanksOpen = false;
    user: User;
    onRegStart() {
        this.initOpen = false;
        this.regOpen  = true;
    }

    onWordsStart(user: any) {
        this.user = user;
        console.log(this.user);
        this.regOpen   = false;
        this.wordsOpen = true
    }

    onWordsDone(words: any) {
        this.user.words = words;
        console.log(this.user);
        //this.wordsOpen  = false;
        this.thanksOpen = true;
    }
}
