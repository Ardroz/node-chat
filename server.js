var http = require('http');

http.createServer(function ( req, res ) {
  res.writeHead( 200, {'Content-Type': 'text/plain'});
  res.write('Hello \n');
  setTimeout(function() {
    res.end('World');
  }, 2000);
}).listen(3000, '127.0.0.1');

console.log('Server Up');