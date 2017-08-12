"use strict";
exports.__esModule = true;
var lg = require("./login");
var $ = require("jquery");
var login = new lg();
$('document').ready(function () {
    console.log('loaded');
    $('#linkedInAuthBtn').click(login.initLAuth);
    $('#normalRegBtn').click(login.initNormalReg);
});
function onSignIn(gUsr) {
    login.gAuth(gUsr);
}
