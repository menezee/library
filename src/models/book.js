import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
    author: String
});

export const Book = mongoose.model('Book', bookSchema);
