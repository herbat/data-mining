import { Component } from '@angular/core'

@Component ({
    selector:'init',
    templateUrl: './init.html'
})

export class Init {
    var initOpen = true;
    var regOpen = false;
    function initReg(){
        initOpen = false;
        regOpen = true;
    }
}
