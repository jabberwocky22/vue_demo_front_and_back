// post.model.js

const express = require('express');
const DuRoutes = express.Router();

// Require DuInfo model in our routes module
let DuInfo = require('./du.model');

// Defined store route
DuRoutes.route('/add').post(function (req, res) {
    let post = new DuInfo(req.body);
    if (!post.DuID) {
        res.status(400).send("Unable to save to database, no DU specified");
    } else {
        post.save()
            .then(() => {
                res.status(200).json({
                    'business': 'business in added successfully'
                });
            })
            .catch((err) => {
                res.status(400).send("unable to save to database " + err);
            });
    }
});

// Defined get data(index or listing) route
DuRoutes.route('/').get(function (req, res) {
    let params = {};
    req.query.duid ? (params.DuID = req.query.duid) : '';
    req.query.siteid ? (params.SiteID = req.query.siteid) : '';
    req.query.sitename ? (params.SiteName = req.query.sitename) : '';
    req.query.program ? (params.Programm = req.query.Programm) : '';

    DuInfo.find(params, function (err, Dus) {
        if (err) {
            res.json(err);
        } else {
            res.json(Dus);
        }
    });
});

// Defined edit route
DuRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    DuInfo.findById(id, function (err, post) {
        if (err) {
            res.json(err);
        }
        res.json(post);
    });
});

// Defined get data(index or listing) route
DuRoutes.route('/:duid').get(function (req, res) {
    let duParam = req.params.duid;
    DuInfo.find({
        DuID: duParam
    }, function (err, posts) {
        if (err) {
            res.json(err);
        } else {
            res.json(posts);
        }
    });
});

//  Defined update route
DuRoutes.route('/update/:id').post(function (req, res) {
    DuInfo.findById(req.params.id, function (err, post) {
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
DuRoutes.route('/delete/:id').delete(function (req, res) {
    DuInfo.findByIdAndRemove({
        _id: req.params.id
    }, function (err) {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = DuRoutes;