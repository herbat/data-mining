import { Component } from '@angular/core'

@Component ({
    selector : 'app-root',
    template: `<h1>{{title}}</h1>
               <init  [hidden]="!initOpen" (onRegStart) = "onRegStart()"></init>
               <reg   [hidden]="!regOpen"  (onWordsStart) = "onWordsStart()"></reg>
               <words [hidden]="!wordsOpen" ></words>
                `
})

export class AppComponent {
    title = "Five Words";
    initOpen = true;
    regOpen = false;
    wordsOpen = false
    onRegStart() {
        this.initOpen = false;
        this.regOpen  = true;
    }

    onWordsStart() {
        this.regOpen   = false;
        this.wordsOpen = true
    }
}
