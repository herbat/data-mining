const json2csv = require('json2csv');
const mc       = require('mongodb').MongoClient;
const assert   = require('assert');
const ObjectId = require('mongodb').ObjectID;
const urlM     = 'mongodb://localhost:27017/test';

exports.convert = function (callback) {
    
    mc.connect(urlM, function(err, db) {
        assert.equal(null, err);
        console.log("Connected to mongodb server for converting");
        var col = db.collection('test');
        var data = [];
        var result = '';
        col.find().each((err, doc) => {
            if(doc) {
                doc._id = doc._id.toString();
                data.push(doc);
            } else {
                db.close();
                try {
                    result = json2csv({data:data, flatten:true, newLine:'\r\n'});
                    result = result.replace(/"/g, '');
                    console.log('Data converted');
                    callback(result);
                } catch (err) {
                    console.log(data, err);
                }
                return false;
            }
        });
        
        db.close();
    });
    
}