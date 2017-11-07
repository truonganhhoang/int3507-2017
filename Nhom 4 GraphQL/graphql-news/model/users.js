import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    company: {
        type: String
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    contry: {
        type: String,
        required: true
    },
    postal_code: {
        type: Number,
        required: true
    },
    about_me: {
        type: String
    },
    role: {
        type: String,
        required: true
    },
    flag_active: {
        type: Boolean
    }
}, { collection: 'user', timestamps: true });

export default mongoose.model('user', userSchema);
