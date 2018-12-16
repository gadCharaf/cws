var createError = require('http-errors');
var express = require('express');
var path = require('path');

var logger = require('morgan');

var apiProxyRouter = require('./routers/proxy.router');
var apiFlowRouter = require('./routers/flow.router');
var apiProfileRouter = require('./routers/profile.router');
var apiSystemRouter = require('./routers/system.router');
var apiUserRouter = require('./routers/user.router');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/carto-ws', { promiseLibrary: require('bluebird') })
    .then(() =>  console.log('connection successful'))
    .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/carto-ws')));
app.use('/', express.static(path.join(__dirname, 'dist/carto-ws')));
app.use('/proxies', apiProxyRouter);
app.use('/flows', apiFlowRouter);
app.use('/profiles', apiProfileRouter);
app.use('/systems', apiSystemRouter);
app.use('/users', apiUserRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.send(err.status);
});

app.listen(3000, function() {
    console.log('listening on 3000')
})

module.exports = app;
