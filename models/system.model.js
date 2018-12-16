var mongoose = require('mongoose');

var SystemSchema = new mongoose.Schema({
    name: String,
    description: String,
    technologies: [String]
});

module.exports = mongoose.model('System', SystemSchema);
