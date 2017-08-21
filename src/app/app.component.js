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
    }
    AppComponent.prototype.initReg = function () {
        this.initOpen = false;
        this.regOpen = true;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            template: "<h1>{{title}}</h1>\n               <init [hidden]=\"!initOpen\"></init>\n               <reg  [hidden]=\"!regOpen\"></reg>\n               <button type=\"button\" (click)=\"initReg()\">Switcharoo!!!</button>\n                "
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map
