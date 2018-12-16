var express = require('express');
var routerSystem = express.Router();
var System = require('../models/system.model');


routerSystem.get('/', function(req, res, next) {
    System.find(function (err, array) {
        if (err) return next(err);
        res.json(array);
    });
});


routerSystem.get('/:id', function(req, res, next) {
    System.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerSystem.post('/', function(req, res, next) {
    System.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerSystem.put('/:id', function(req, res, next) {
    System.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerSystem.delete('/:id', function(req, res, next) {
    System.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = routerSystem;
