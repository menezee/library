const http = require('http');
const port = 3000;

const httpServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: `${req.method} received on ${req.url}` }));
});

httpServer.listen(port, () => {
    console.log(`listening on ${port}`)
});

