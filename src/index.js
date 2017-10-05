const express = require('express'); // const app = const express = require('express')();
const app = express();
const port = 3000;

app.get('/books', (req, res) => res.send('GET in /books'));
app.get('/users',  (req, res) => res.send('GET in /users'));
app.post('/users', (req, res) => res.send('POST in /users'));

app.listen(3000, () => {
    console.log(`listening on ${port}`)
});