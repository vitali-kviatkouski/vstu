const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/map';

const server = http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    if (req.method == 'POST') {
        var params = url.parse(req.url, true).query;
        MongoClient.connect(mongoUrl, function(err, db) {
            var collection = db.collection('points');
            collection.insertOne({lat: parseFloat(params.lat), lng: parseFloat(params.lng)}, function(err, result) {
                console.log("Inserted new point " + params.lat + "," + params.lng);
                db.close();                
                res.end();
            });
        });        
    }
    if (req.method == 'GET') {
        MongoClient.connect(mongoUrl, function(err, db) {
            var collection = db.collection('points');
            collection.find({}).toArray(function(err, points) {
                console.log("Retrieving all points");
                db.close();
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(points));
            });
        });
    }
});

server.listen(8080, '127.0.0.1', function() {
  console.log('Server running...');
});