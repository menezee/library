import express from 'express';
import bodyParser from 'body-parser';
import databaseConnection from './database'
import { booksRouter, usersRouter } from './routes'
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/books', booksRouter);

databaseConnection.on('error', console.error.bind(console, 'connection error:'));
databaseConnection.once('open', function() {
    app.listen(3000, () => {
        console.log(`listening on ${port}`);
    });
});


