import { Component, EventEmitter, Output } from '@angular/core';

export class User {
    age: number;
    sex: number;
    email?: string;
    words?: string[];
}

@Component({
    selector: 'reg',
    templateUrl: './reg.html',
})

export class Register {
    user: User = {
        age: 0,
        sex: 3,
        email: ''
    };
    @Output() onWordsStart: EventEmitter<any> = new EventEmitter();

    submit(sex:number, age:number): void {
        $('#submit-button').addClass('animate');
        $('#submit-button').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function (e) { $('#submit-button').removeClass('animate');
        });
        this.onWordsStart.emit(this.user);
        this.user.age = age;
        this.user.sex = sex;
        console.log('submitted', this.user);
    };

}
