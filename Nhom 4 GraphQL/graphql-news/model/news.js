import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const newsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    view: {
        type: Number
    },
    category_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, { collection: 'news', timestamps: true });

export default mongoose.model('news', newsSchema);
