import { Component } from '@angular/core'

import { Register } from './reg'
import { Init } from './init'

@Component ({
    selector : 'app-root',
    template: `<init [hidden]="initOpen"></init>
               <reg  [hidden]="regOpen"></reg>
                `
})

export class AppComponent {

}
