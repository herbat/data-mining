import lg = require('./login');
import $ = require('jquery');

let login = new lg();

$('document').ready(() => {
    console.log('loaded');

    $('#linkedInAuthBtn').click(login.initLAuth);
    $('#normalRegBtn').click(login.initNormalReg);
});

function onSignIn(gUsr){
    login.gAuth(gUsr);
}
