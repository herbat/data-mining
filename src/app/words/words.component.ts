import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component ({
    selector: 'words',
    templateUrl: './words.html'
})

export class Words {
    question = 'Write five words that pop into your head about this talk!';
    @Output() onWordsDone: EventEmitter<any> = new EventEmitter();

    wordForm = new FormGroup({
        words: new FormArray([
            new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(20),
                Validators.pattern('^[A-Za-z]+$')
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
            this.words.push(new FormControl('', Validators.required));
        }
    };
    
    setBtn(){
        console.log('button is under setting');
        var h = $('.word-ip-box').height();
        $('.next-btn').css({'width':h+'px'});
        console.log('button width set to', h);
    }

}
