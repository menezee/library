import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    borrowedBooks: Array
});

export const User = mongoose.model('User', userSchema);
