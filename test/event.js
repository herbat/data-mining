/*jslint node:true*/
/*jslint esnext:true*/

module.exports = {
    init:init
};

const express  = require('express');
const fs = require('fs');

function init(app, eventID, question){
    var data = ' ' + eventID + question;
    fs.writeFile('./public/event.txt', data + "\n", function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Event created!");
    });
    app.use('/' + eventID, express.static('public'));
}
