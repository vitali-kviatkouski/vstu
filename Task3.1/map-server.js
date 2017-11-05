const http = require('http');
const url = require('url');
const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/map';

const server = http.createServer(function(req, res) {
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
});

server.listen(8080, '127.0.0.1', function() {
  console.log('Server running...');
});