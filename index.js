const http = require('http');
const port = 3000;

const httpServer = http.createServer((req, res) => res.end('hello'));
httpServer.listen(port, () => {
    console.log(`listening on ${port}`)
});