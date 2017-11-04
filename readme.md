How to run:
1. Download and unpack into checked out git repo:
https://www.dropbox.com/s/8nnsha8tznfocit/executables.zip?dl=0

2. Task 1: run `node hello.js`, navigate to http://localhost:8080
3. Task 2: 
3.1. Ensure you have created directory x:\data\db where x is the drive where you checked out repo. Run `mongod`
3.2. Run `node map-server.js`
3.3. Open file `map-share.html`
Click several times on map - those data should be persisted in mongodb database so after page reload all saved points should be prepopulated.
