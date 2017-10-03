const http = require('http');
const port = 3000;

function handleRequest(req, res) {
    console.log(`req: method ${req.method}, resource: ${req.url}`);
    res.end('hello');
}

const httpServer = http.createServer(handleRequest);

httpServer.listen(port);