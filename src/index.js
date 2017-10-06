import express from 'express';
import openDatabaseConnection from './database'
import { booksRouter, usersRouter } from './routes'
const app = express();
const port = 3000;

app.use('/users', usersRouter);
app.use('/books', booksRouter);

openDatabaseConnection(() => console.log(`successfully connected to mongo`));

app.listen(3000, () => {
    console.log(`listening on ${port}`)
});
