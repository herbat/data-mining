import { Component, EventEmitter, Output } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component ({
    selector:'thx',
    templateUrl: './thx.html'
})

export class Thanks {
    @Output() private onMailSubmit = new EventEmitter();
    mailAdded = false;
    noThx = false;
    
    addMail(mail: any){
        this.onMailSubmit.emit(mail);
        this.mailAdded = true;
    }

    ifNoThx(){
        this.onMailSubmit.emit('');
        this.noThx = true;
    }
}
