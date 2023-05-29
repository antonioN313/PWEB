var http = require('http');
http.createServer(function (res) {
    http.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World');
}).listen(8080);
