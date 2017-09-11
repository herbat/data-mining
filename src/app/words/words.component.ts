import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component ({
    selector: 'words',
    templateUrl: './words.html',
    animations: [
        trigger('enter', [
            state('in', style({transform: 'translateX(0)'})),
            transition(':enter', [
                style({transform: 'translateX(100%)'}),
                animate('400ms ease-out')
            ]),
        ])
    ]
})

export class Words {
    question = 'TEDxDanubia';
    @Output() onWordsDone: EventEmitter<any> = new EventEmitter();

    wordForm = new FormGroup({
        words: new FormArray([
            new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
                Validators.pattern('^[A-Za-z-]+$')
            ]),
        ])
    });

    get words(): FormArray {
        return this.wordForm.get('words') as FormArray;
    }

    onSubmit() {
        console.log(this.words.value);
        this.onWordsDone.emit(this.words.value);
    }

    next(i : number) {
        if(this.words.length < 5){
            this.words.push(new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
                Validators.pattern('^[A-Za-z]+$')
            ]));
            $('#'+i+1).focus();
        }
    };
    
    checkIfValid(i: number){
        console.log('validity checked on', i);
        var input = $('#'+i);
        var w = 0;
        if (input.hasClass('ng-invalid') && input.hasClass('ng-touched')) {
            w = input.height() + input.width();
            $('#inv'+i).css({'width': w + 'px'});
            $('#inv'+i).show();
        } else { $('#inv'+i).hide();}

    }

}
