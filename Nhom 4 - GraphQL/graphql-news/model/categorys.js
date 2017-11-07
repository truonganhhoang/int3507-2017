import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { collection: 'category', timestamps: true });

export default mongoose.model('category', categorySchema);

