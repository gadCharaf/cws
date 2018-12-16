var express = require('express');
var routerProxy = express.Router();
var Proxy = require('../models/proxy.model');


routerProxy.get('/', function(req, res, next) {
    Proxy.find(function (err, array) {
        if (err) return next(err);
        res.json(array);
    });
});


routerProxy.get('/:id', function(req, res, next) {
    Proxy.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerProxy.post('/', function(req, res, next) {
    Proxy.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerProxy.put('/:id', function(req, res, next) {
    Proxy.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


routerProxy.delete('/:id', function(req, res, next) {
    Proxy.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = routerProxy;
