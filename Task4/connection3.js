const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/map';

var connGen = connect();
console.log("Running generator");
runPromise(connGen, null);

function runPromise(gen, arg) {
	var res = gen.next(arg);
	if (res.done) return;
	var innerPromise = res.value;
	innerPromise.then(function(arg) {
		runPromise(gen, arg);
	});
}

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