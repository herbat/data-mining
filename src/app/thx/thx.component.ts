import { Component, EventEmitter, Output } from '@angular/core';

@Component ({
    selector:'thx',
    templateUrl: './thx.html'
})

export class Thanks {
    @Output() private onMailSubmit = new EventEmitter();
    mailAdded = false;
    
    addMail(mail: any){
        this.onMailSubmit.emit(mail);
        this.mailAdded = true;
    }
}
