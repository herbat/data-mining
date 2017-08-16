import lg = require('./login');
import $ = require('jquery');

let login = new lg();

$('document').ready(() => {
    console.log('loaded');

    $('#in-a-btn').click(login.initLAuth);
    $('#nreg-btn').click(login.initNormalReg);
});

function onSignIn(gUsr){
    login.gAuth(gUsr);
}
