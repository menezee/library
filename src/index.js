import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import databaseConnection from './database'
import { booksRouter, usersRouter } from './routes'
const app = express();
const port = 3000;

// support for json in body post
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// hanlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// routers
app.use('/users', usersRouter);
app.use('/books', booksRouter);

databaseConnection.on('error', console.error.bind(console, 'connection error:'));
// as soon as mongo connection is open, create server
databaseConnection.once('open', function() {
    app.listen(3000, () => {
        console.log(`listening on ${port}`);
    });
});


