// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post

let todo_card = new Schema({
    title: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    target_time: {
        type: Date,
        default: ''
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    collection: 'todo_cards'
});

module.exports = mongoose.model('todo_card', todo_card);