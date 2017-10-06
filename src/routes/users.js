import express from 'express';
export const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    console.log('/users received at: ', Date.now());
    next()
});

usersRouter.get('/', function (req, res) {
    res.send('GET for /users')
});
