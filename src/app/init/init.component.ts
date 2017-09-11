import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component ({
    selector:'init',
    templateUrl: './init.html'
})

export class Init {
    @Output() private onRegStart = new EventEmitter();
    question = "5 words about TEDxDanubia";

    startReg(){
        $('#title').addClass('init-done');
        this.onRegStart.emit();
    }
}
