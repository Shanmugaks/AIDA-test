var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(202, {'Content-Type': 'text/plain'});
    res.end('Hello AIDA - Test service In Progress.... 8th July 2018 at 8:23PM');
}).listen(8080);
