import express from 'express';
export const booksRouter = express.Router();

booksRouter.use((req, res, next) => {
    console.log('/users received at: ', Date.now());
    next()
});

booksRouter.get('/', function (req, res) {
    res.send('GET for /books')
});
