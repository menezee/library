import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/library');
export default mongoose.connection;