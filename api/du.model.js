// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post

let DuInfo = new Schema({
    DuID: {
        type: String,
        index: true,
        unique: true
    },
    SiteID: {
        type: String
    },
    SiteName: {
        type: String
    },
    Programm: {
        type: String
    }
}, {
    collection: 'Dus'
});

module.exports = mongoose.model('DuInfo', DuInfo);