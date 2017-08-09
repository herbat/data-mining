import $ = require("jquery");

class Login {

    initGAuth() {
        console.log('assert');
        $('#googleAuthBtn').css('background-color', 'blue');
    }

    initLAuth() {
        $('#linkedInAuthBtn').css('background-color', 'red');
    }

    initNormalReg (){
        $('#normalRegBtn').css('background-color', 'green');
    }

}

export = Login;
