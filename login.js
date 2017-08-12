"use strict";
var Login = (function () {
    function Login() {
    }
    Login.prototype.gAuth = function (gUsr) {
        var profile = gUsr.getBasicProfile();
        console.log(profile.getName());
    };
    Login.prototype.initLAuth = function () {
    };
    Login.prototype.initNormalReg = function () {
    };
    return Login;
}());
module.exports = Login;
