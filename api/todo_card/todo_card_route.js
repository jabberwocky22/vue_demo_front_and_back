// post.model.js

const express = require('express');
const expressRoutes = express.Router();

// Require todo_card model in our routes module
let todo_card = require('./todo_card_model');

// Defined store route
expressRoutes.route('/add').post(function (req, res) {
    let post = new todo_card(req.body);
    post.save()
        .then(() => {
            res.status(200).json({
                'business': 'business in added successfully'
            });
        })
        .catch((err) => {
            res.status(400).send("unable to save to database " + err);
        });
});

// Defined get data(index or listing) route
expressRoutes.route('/').get(function (req, res) {
    let params = {};
    req.query.title ? (params.title = req.query.title) : '';
    req.query.location ? (params.location = req.query.location) : '';
    req.query.target_time ? (params.target_time = req.query.target_time) : '';
    req.query.active ? (params.active = req.query.active) : '';

    todo_card.find(params, function (err, post) {
        if (err) {
            res.json(err);
        } else {
            res.json(post);
        }
    });
});

// Defined edit route
expressRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    todo_card.findById(id, function (err, post) {
        if (err) {
            res.json(err);
        }
        res.json(post);
    });
});

// Defined get data(index or listing) route
expressRoutes.route('/:title').get(function (req, res) {
    let title = req.params.title;
    todo_card.find({
        title: title
    }, function (err, posts) {
        if (err) {
            res.json(err);
        } else {
            res.json(posts);
        }
    });
});

//  Defined update route
expressRoutes.route('/update/:id').post(function (req, res) {
    todo_card.findById(req.params.id, function (err, post) {
        if (!post)
            res.status(404).send("data is not found");
        else {
            post.title = req.body.title;
            post.body = req.body.body;
            post.save().then(() => {
                    res.json('Update complete');
                })
                .catch((err) => {
                    res.status(400).send("unable to update the database " + err);
                });
        }
    });
});

// Defined delete | remove | destroy route
expressRoutes.route('/delete/:id').delete(function (req, res) {
    todo_card.findByIdAndRemove({
        _id: req.params.id
    }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = expressRoutes;