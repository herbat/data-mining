/*jslint node:true*/
/*jslint esnext:true*/

const cpr      = require('child_process');
const exec     = cpr.exec;
const zip      = require('compression');
const express  = require('express');
const parser   = require('body-parser');
const mc       = require('mongodb').MongoClient;
const assert   = require('assert');
const ObjectId = require('mongodb').ObjectID;
const fs       = require('fs');
const cv       = require('./convert');
const app      = express();
const port     = 80;
const urlM     = 'mongodb://localhost:27017/test';

var eventID = 0;

app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

app.use(zip());
app.use('/', express.static('public'));//WILL BE REMOVED

app.use('/' + eventID, express.static('public'));
app.use('/analytics', express.static('/home/webadmin/R/dtm-test/5-words'));

app.use('/admin', express.static('admin'));

app.get('/render', (request, response)=>{

    var env = process.env;
    var varName;
    var envCopy = {};

    for (varName in env) {
        envCopy[varName] = env[varName];
    }

    envCopy['HOME'] = '/home/webadmin';
    envCopy['PATH'] = '/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games';

    cv.convert((res) => {
        fs.writeFile("/home/webadmin/R/dtm-test/data/data.csv", res + "\n", function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("Saved file ");
            exec('/home/webadmin/test/render.sh', {env: envCopy}, (error, stdout, stderr) => {
                console.log('finished');
                if (error) {
                    response.send('Unexpected error');
                    return console.log(error, stderr);
                }
                console.log(stdout);
                response.send('Rendered successfully!');
            });
        });
    });

});

app.post('/setEventId', (request, response) => {
    eventID = request.body.eventId;
    console.log(eventID);
    response.send('eventId set successfully');
});

app.post('/data', (request, response) => {
    var data = request.body;
    var uString = Object.keys(data)[0];
    uString.substring(3, uString.length-7);
    var user = JSON.parse(uString);
    console.log(uString);

    mc.connect(urlM, function(err, db) {
        assert.equal(null, err);
        console.log("Connected to mongodb server");

        db.collection('test').insertOne(user, function(err, r) {
            assert.equal(null, err);
            assert.equal(1, r.insertedCount);
            console.log('Inserted data ');
        });

        db.close();

     });


    response.send('JSON accepted!');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened:', err);
    }

    mc.connect(urlM, function(err, db) {
        assert.equal(null, err);
        console.log("Connected to mongodb server");
        db.close();
    });


    console.log(`server is listening on port ${port}`);
});

