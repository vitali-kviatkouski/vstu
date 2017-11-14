const MongoClient = require('mongodb').MongoClient;

const mongoUrl = 'mongodb://localhost:27017/map';

console.log("Prepare connection");
MongoClient.connect(mongoUrl, function(err, db) {
	var collection = db.collection('points');
	console.log("Retrieving all points");
	collection.find({}).toArray(function(err, points) {
		console.log("Found " + points.length + " points");
		console.log("Preparing for closing");
		db.close();
		console.log("closed connection" );
	});
});