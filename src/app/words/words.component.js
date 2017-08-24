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
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
var Words = (function () {
    function Words() {
        this.question = 'Write five words that pop into your head about this talk!';
        this.onWordsDone = new EventEmitter();
        this.wordForm = new FormGroup({
            words: new FormArray([
                new FormControl('', [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(20),
                    Validators.pattern('^[A-Za-z]+$')
                ]),
            ])
        });
    }
    Object.defineProperty(Words.prototype, "words", {
        get: function () {
            return this.wordForm.get('words');
        },
        enumerable: true,
        configurable: true
    });
    Words.prototype.onSubmit = function () {
        console.log(this.words.value);
        this.onWordsDone.emit(this.words.value);
    };
    Words.prototype.next = function (i) {
        if (this.words.length < 5) {
            this.words.push(new FormControl('', Validators.required));
        }
    };
    ;
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], Words.prototype, "onWordsDone", void 0);
    Words = __decorate([
        Component({
            selector: 'words',
            templateUrl: './words.html'
        })
    ], Words);
    return Words;
}());
export { Words };
//# sourceMappingURL=words.component.js.map
