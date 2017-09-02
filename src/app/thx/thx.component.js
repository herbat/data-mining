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
var Thanks = (function () {
    function Thanks() {
        this.onMailSubmit = new EventEmitter();
        this.mailAdded = false;
        this.noThx = false;
    }
    Thanks.prototype.addMail = function (mail) {
        this.onMailSubmit.emit(mail);
        this.mailAdded = true;
    };
    Thanks.prototype.ifNoThx = function () {
        this.onMailSubmit.emit('');
        this.noThx = true;
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], Thanks.prototype, "onMailSubmit", void 0);
    Thanks = __decorate([
        Component({
            selector: 'thx',
            templateUrl: './thx.html'
        })
    ], Thanks);
    return Thanks;
}());
export { Thanks };
//# sourceMappingURL=thx.component.js.map
