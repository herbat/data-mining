var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Five Words";
        this.initOpen = true;
        this.regOpen = false;
        this.wordsOpen = false;
        this.thxOpen = false;
    }
    AppComponent.prototype.onRegStart = function () {
        this.initOpen = false;
        this.regOpen = true;
    };
    AppComponent.prototype.onWordsStart = function (user) {
        this.user = user;
        console.log(this.user);
        this.regOpen = false;
        this.wordsOpen = true;
    };
    AppComponent.prototype.onWordsDone = function (words) {
        this.user.words = words;
        console.log(this.user);
        this.wordsOpen = false;
        this.thxOpen = true;
    };
    AppComponent.prototype.onMailSubmit = function (mail) {
        this.user.email = mail;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            template: "<h1 id=\"title\" [hidden]=\"!initOpen\"> {{title}} </h1>\n               <init  [hidden]=\"!initOpen\"  (onRegStart)   = \"onRegStart()\"></init>\n               <reg   [hidden]=\"!regOpen\"   (onWordsStart) = \"onWordsStart($event)\"></reg>\n               <words [hidden]=\"!wordsOpen\" (onWordsDone)  = \"onWordsDone($event)\"></words>\n               <thx   [hidden]=\"!thxOpen\"   (onMailSubmit) = \"onMailSubmit($event)\"></thx>\n                "
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map