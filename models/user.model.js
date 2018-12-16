var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    login: String,
    password : String,
    profile: String


});

module.exports = mongoose.model('User', UserSchema);
