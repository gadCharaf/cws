var express = require('express');
var routerProfile = express.Router();
var Profile = require('../models/profile.model');


routerProfile.get('/', function(req, res, next) {
    Profile.find(function (err, array) {
        if (err) return next(err);
        res.json(array);
    });
});


routerProfile.get('/:id', function(req, res, next) {
    Profile.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerProfile.post('/', function(req, res, next) {
    Profile.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerProfile.put('/:id', function(req, res, next) {
    Profile.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerProfile.delete('/:id', function(req, res, next) {
    Profile.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = routerProfile;
