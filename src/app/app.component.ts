import { Component } from '@angular/core';
import { User } from './reg/reg.component';
//var mc = require('mongodb').MongoClient;
//var assert = require('assert');
//var ObjectId = require('mongodb').ObjectID;
//var url = 'mongodb://localhost:27017/test';

@Component ({
    selector : 'app-root',
    template: `<h1 id="title" [hidden]="!initOpen"> {{title}} </h1>
               <init  [hidden]="!initOpen"  (onRegStart)   = "onRegStart()"></init>
               <reg   [hidden]="!regOpen"   (onWordsStart) = "onWordsStart($event)"></reg>
               <words [hidden]="!wordsOpen" (onWordsDone)  = "onWordsDone($event)"></words>
               <thx   [hidden]="!thxOpen"   (onMailSubmit) = "onMailSubmit($event)"></thx>
                `
})

export class AppComponent {
    title = "Five Words";
    initOpen   = true;
    regOpen    = false;
    wordsOpen  = false;
    thxOpen    = false;
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
        this.wordsOpen  = false;
        this.thxOpen = true;
    }
    
    onMailSubmit(mail: any) {
        this.user.email = mail;
        this.submitData();
    }

    submitData(){
        //TODO submit user data to mongoDB
        console.log('data submitted');
    }
}
