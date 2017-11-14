const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/map';

var connGen = connect();
console.log("Running generator");
var promise = connGen.next().value;
promise.then(function(db) {
	promise = connGen.next(db).value;
	promise.then(function(points) {
		connGen.next(points).value;
	});
});

function* connect() {
	console.log("Prepare connection");
	var db = yield MongoClient.connect(mongoUrl);
	console.log("Retrieving all points");
	var collection = db.collection('points');
	var points = yield collection.find({}).toArray();
	console.log("Found " + points.length + " points");
	console.log("Preparing for closing");
	db.close();
	console.log("closed connection" );
}