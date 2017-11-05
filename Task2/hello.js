const http = require('http');

const server = http.createServer(function(req, res) {
  res.end('Hello World');
});

server.listen(8080, "127.0.0.1", function() {
  console.log('Server running...');
});