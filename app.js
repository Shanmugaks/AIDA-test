var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(202, {'Content-Type': 'text/plain'});
    res.end('Hello AIDA - Test service In Progress....');
}).listen(8080);