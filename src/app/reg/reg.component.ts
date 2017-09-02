import { Component, EventEmitter, Output } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

export class User {
    id: number;
    age: number;
    sex: string;
    email?: string;
    words?: string[];
}

@Component({
    selector: 'reg',
    templateUrl: './reg.html'
})

export class Register {
    user: User = {
        id: Math.random() * 10e16,
        age: 0,
        sex: '',
        email: ''
    };
    @Output() onWordsStart: EventEmitter<any> = new EventEmitter();

    submit(sex:string, age:number): void {
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
