import { Component, EventEmitter, Output } from '@angular/core';

export class User {
    id: number;
    age: number;
    name: string;
    profession: string;
}

@Component({
    selector: 'reg',
    templateUrl: './reg.html'
})

export class Register {
    users: User[];
    user: User;
    @Output onWordsStart = new EventEmitter();

    submit(): void {
        $('#submit-button').addClass('animate');
        $('#submit-button').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function (e) { $('#submit-button').removeClass('animate');
        });
        //this.users.push(this.user);
        this.onWordsStart.emit();
        console.log('submitted', this.user.age);
    };

}
