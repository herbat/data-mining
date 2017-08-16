import { Component } from '@angular/core';

@Component({
    templateUrl: './normalreg.html'
})

export class Register {
    var users = [];
    function submit() {
        var user = {
            name : '',
            age : 0,
            profession : ''
        };
        users.push(user);
        console.log('submitted');
    };
}
