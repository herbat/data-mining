var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Five Words";
        this.states = {
            init: 'shown',
            reg: 'hidden',
            words: 'hidden',
            thx: 'hidden'
        };
        this.open = {
            init: true,
            reg: false,
            words: false,
            thx: false
        };
        this.leafing = false;
    }
    AppComponent.prototype.submitData = function () {
        //TODO submit user data to mongoDB
        var dat = JSON.stringify(this.user);
        console.log(dat);
        $.post("/data", dat, function (data) {
            console.log("Response: " + data);
        });
        console.log(this.user);
        console.log('data submitted');
    };
    AppComponent.prototype.onLeaf = function (currentPage) {
        this.leafing = true;
        this.states[currentPage] = 'hidden2';
    };
    AppComponent.prototype.onLeafEnd = function (currentPage, nextPage) {
        if (this.leafing) {
            this.open[currentPage] = false;
            this.open[nextPage] = true;
            this.states[nextPage] = 'shown';
            this.leafing = false;
        }
    };
    AppComponent.prototype.addUser = function (user) {
        this.user = user;
    };
    AppComponent.prototype.addWords = function (words) {
        this.user.words = words;
    };
    AppComponent.prototype.addMail = function (mail) {
        this.user.email = mail;
        this.submitData();
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.html',
            animations: [
                trigger('enter', [
                    state('hidden', style({ transform: 'translateX(1000px)' })),
                    state('shown', style({ transform: 'translateX(0)' })),
                    state('hidden2', style({ transform: 'translateX(-1000px)' })),
                    transition('hidden => shown', animate('400ms ease-out')),
                    transition('shown => hidden2', animate('400ms ease-in'))
                ])
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
