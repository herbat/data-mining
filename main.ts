import lg = require('./login');
import $ = require('jquery');

let login = new lg();

$('#googleAuthBtn').click(login.initGAuth);

$('document').ready(() => {console.log('loaded')});
