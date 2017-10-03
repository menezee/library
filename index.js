import http from 'http'
const port = 3000;

const httpServer = http.createServer((req, res) => {
    if (!validate(req.headers)) res.end('unauthorized');

    if (req.url === '/books') {
        switch (req.method) {
            case 'GET': res.end('GET BOOKS'); break;
            case 'POST': res.end('POST BOOKS'); break;
            default: res.end('not supported')
        }
    } else if (req.url === '/users') {
        switch (req.method) {
            case 'GET': res.end('GET USERS'); break;
            case 'POST': res.end('POST USERS'); break;
            default: res.end('not supported')
        }
    }
});

const validate = headers => headers.authorization === 'authorized';

httpServer.listen(port, () => {
    console.log(`listening on ${port}`)
});
