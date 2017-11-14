const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/map';

var connGen = connect();
console.log("Running generator");
var arg = null;
runPromise(connGen);

function runPromise(gen, arg) {
	var res = gen.next(arg);
	if (res.done) {
		return;
	}
	var innerPromise = res.value;
	innerPromise.then(function(arg) {
		runPromise(gen, arg);
	});
}

function* connect() {
	console.log("Prepare connection");
	var db = yield MongoClient.connect(mongoUrl);
	console.log("Connection used, prepare for search");
	var collection = db.collection('points');
	console.log("Collection - prepare to return" + collection);
	var points = yield collection.find({}).toArray();
	console.log(points);
	console.log("Collection returned, prepare for close" );
	db.close();
}
