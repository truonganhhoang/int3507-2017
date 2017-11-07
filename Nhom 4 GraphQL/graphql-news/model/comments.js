import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const commentsSchema = new Schema({
    news_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    comment_id: {
        type: Schema.Types.ObjectId
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { collection: 'comments', timestamps: true });

export default mongoose.model('comments', commentsSchema);