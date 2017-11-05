How to run:
1. Download and unpack into checked out git repo:
https://www.dropbox.com/s/8nnsha8tznfocit/executables.zip?dl=0

Tasks:
1. Create google maps integration
1.1. Google maps widget with VSTU centering
1.2. Google maps add points
1.3. Google maps clearing
2. Run hello world
3. Mongo integration
3.1. Implement storing map points in mongo
3.2. Implement loading map points from mongo
3.3. Implement clearing map points

==============================
2. Task 1: run `node hello.js`, navigate to http://localhost:8080
3. Task 2: 
3.1. Ensure you have created directory x:\data\db where x is the drive where you checked out repo. Run `mongod`
3.2. Run `node map-server.js`
3.3. Open file `map-share.html`
Click several times on map - those data should be persisted in mongodb database so after page reload all saved points should be prepopulated.
