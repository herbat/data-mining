import { Component } from '@angular/core';
import { User } from './reg/reg.component';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component ({
    selector : 'app-root',
    templateUrl: './app.html',
    animations: [
        trigger('enter', [
            state('hidden',  style({transform: 'translateX(1000px)'})),
            state('shown',   style({transform: 'translateX(0)'})),
            state('hidden2', style({transform: 'translateX(-1000px)'})),

            transition('hidden => shown', animate('400ms ease-out')),
            transition('shown => hidden2', animate('400ms ease-in'))
        ])
    ]
})

export class AppComponent {
    title = "Five Words";

    states = {
        init:  'shown',
        reg:   'hidden',
        words: 'hidden',
        thx:   'hidden'
    }
    open = {
        init:  true,
        reg:   false,
        words: false,
        thx:   false
    }

    leafing    = false;
    user: User;

    submitData(){
        //TODO submit user data to mongoDB
        var dat = JSON.stringify(this.user);
        console.log(dat);
        $.post(
            "/data",
            dat,
            function(data) {
                console.log("Response: " + data);
            }
        );

        console.log(this.user);
        console.log('data submitted');
    }

    onLeaf(currentPage: string) {
        this.leafing = true;
        this.states[currentPage] = 'hidden2';
    }

    onLeafEnd(currentPage: string, nextPage:string) {
        if(this.leafing) {
            this.open[currentPage] = false;
            this.open[nextPage]    = true;
            this.states[nextPage]  = 'shown';
            this.leafing = false;
        }
    }

    addUser(user: any) {
        this.user = user;
    }

    addWords(words: any) {
        this.user.words = words;
    }
    
    addMail(mail: any) {
        this.user.email = mail;
        this.submitData();
    }


}
