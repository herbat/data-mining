var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Output } from '@angular/core';
var User = (function () {
    function User() {
    }
    return User;
}());
export { User };
var Register = (function () {
    function Register() {
        this.user = {
            id: Math.random() * 10e16,
            age: 0,
            sex: '',
            email: ''
        };
        this.onWordsStart = new EventEmitter();
    }
    Register.prototype.submit = function (sex, age) {
        $('#submit-button').addClass('animate');
        $('#submit-button').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
            $('#submit-button').removeClass('animate');
        });
        this.onWordsStart.emit(this.user);
        this.user.age = age;
        this.user.sex = sex;
        console.log('submitted', this.user);
    };
    ;
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], Register.prototype, "onWordsStart", void 0);
    Register = __decorate([
        Component({
            selector: 'reg',
            templateUrl: './reg.html'
        })
    ], Register);
    return Register;
}());
export { Register };
//# sourceMappingURL=reg.component.js.map
