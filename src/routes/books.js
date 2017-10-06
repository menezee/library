import express from 'express';
import { Book } from '../models'
import chalk from 'chalk';
export const booksRouter = express.Router();

booksRouter.use((req, res, next) => {
    console.log(chalk.bgWhite(`/users received at: ${Date.now()}`));
    next()
});

booksRouter.get('/:id', (req, res) => {
    const { id } = req.params;
    Book.findById(id, (err, book) => {
        if (err) res.status(404).json({ message: 'Book not found' });
        res.status(200).json(book);
    });
});

booksRouter.get('/', function (req, res) {
    Book.find((err, books) => {
        if (err) res.status(404).json({ message: 'Books not found' });
        res.status(200).json(books);
    });
});

booksRouter.post('/', function (req, res) {
    Book.create({
        ...req.body
    }, (err, book) => {
        if (err) res.status(400).json({ message: `Error when creating book. ${err}` });
        else {
            res.status(200).json({ message: 'Book created', book });
        }
    });
});