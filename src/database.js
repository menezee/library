import mongoose from 'mongoose';

export default async callback => {
    await mongoose.createConnection('mongodb://localhost/library', {
        useMongoClient: true,
    });
    callback()
}
