const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/map';

console.log("Running generator");
runPromise(connect(), null);

function runPromise(gen, arg) {
	let res = gen.next(arg);
	if (res.done) return;
	let innerPromise = res.value;
	innerPromise.then(arg => runPromise(gen, arg));
}

function* connect() {
	console.log("Prepare connection");
	let db = yield MongoClient.connect(mongoUrl);
	console.log("Retrieving all points");
	let collection = db.collection('points');
	let points = yield collection.find({}).toArray();
	console.log("Found " + points.length + " points");
	console.log("Preparing for closing");
	db.close();
	console.log("closed connection" );
}