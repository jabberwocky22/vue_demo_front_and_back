/* eslint-disable no-console */
// server.js

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const postRoute = require('./post.route');
const duRoute = require('./du.route');
const todo_cardRoute = require('./todo_card/todo_card_route');
const file_upload = require('./image.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, {
    useNewUrlParser: true
}).then(
    () => {
        console.log('Database is connected')
    },
    err => {
        console.log('Can not connect to the database' + err)
    }
);

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/posts', postRoute);
app.use('/duinfo', duRoute);
app.use('/todo_cardRoute', todo_cardRoute);
app.use('/images', file_upload);

app.listen(PORT, function () {
    console.log('Server is running on Port:', PORT);
});