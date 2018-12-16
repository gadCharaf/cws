var mongoose = require('mongoose');

var ParcoursSchema = new mongoose.Schema({
    name: String,
    description: String,
    flows: [String]
});

module.exports = mongoose.model('Parcours', ParcoursSchema);
