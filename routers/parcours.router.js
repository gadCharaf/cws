var express = require('express');
var routerParcours = express.Router();
var Parcours = require('../models/parcours.model');


routerFlow.get('/', function(req, res, next) {
    Parcours.find(function (err, array) {
        if (err) return next(err);
        res.json(array);
    });
});


routerFlow.get('/:id', function(req, res, next) {
    Parcours.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerFlow.post('/', function(req, res, next) {
    Parcours.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerFlow.put('/:id', function(req, res, next) {
    Parcours.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerFlow.delete('/:id', function(req, res, next) {
    Parcours.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = routerParcours;
