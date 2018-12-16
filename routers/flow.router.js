var express = require('express');
var routerFlow = express.Router();
var Flow = require('../models/flow.model');


routerFlow.get('/', function(req, res, next) {
    Flow.find(function (err, array) {
        if (err) return next(err);
        res.json(array);
    });
});


routerFlow.get('/:id', function(req, res, next) {
    Flow.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerFlow.post('/', function(req, res, next) {
    Flow.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerFlow.put('/:id', function(req, res, next) {
    Flow.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerFlow.delete('/:id', function(req, res, next) {
    Flow.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = routerFlow;
