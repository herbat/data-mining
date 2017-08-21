import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component ({
    selector:'init',
    templateUrl: './init.html'
})

export class Init {
    @Output private onRegStart = new EventEmitter();

    startReg(){
        this.onRegStart.emit();
    }
}
