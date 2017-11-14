const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/map';

var connGen = connect();
console.log("Running generator");
var promise = connGen.next().value;
promise.then(function(db) {
	connGen.next(db);
});

function* connect() {
	console.log("Prepare connection");
	var db = yield MongoClient.connect(mongoUrl);
	console.log("Collection returned, prepare for close" );
	db.close();
	console.log("closed connection" );
}