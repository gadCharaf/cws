var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
    name: String,
    description: String,
    read: Boolean,
    write: Boolean

});

module.exports = mongoose.model('Profile', ProfileSchema);
