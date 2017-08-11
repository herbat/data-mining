"use strict";
exports.__esModule = true;
var lg = require("./login");
var $ = require("jquery");
var login = new lg();
$('#googleAuthBtn').click(login.initGAuth);
$('document').ready(function () { console.log('loaded'); });
