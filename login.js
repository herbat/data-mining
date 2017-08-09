"use strict";
var $ = require("jquery");
var Login = (function () {
    function Login() {
    }
    Login.prototype.initGAuth = function () {
        console.log('assert');
        $('#googleAuthBtn').css('background-color', 'blue');
    };
    Login.prototype.initLAuth = function () {
        $('#linkedInAuthBtn').css('background-color', 'red');
    };
    Login.prototype.initNormalReg = function () {
        $('#normalRegBtn').css('background-color', 'green');
    };
    return Login;
}());
module.exports = Login;
