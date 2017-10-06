import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    title: String,
    author: String
});

export const bookModel = mongoose.model('Book', bookSchema);
