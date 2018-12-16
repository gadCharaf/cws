var mongoose = require('mongoose');

var FlowSchema = new mongoose.Schema({
    name: String,
    description: String,
    consumers: [String],
    idProxy:String
});

module.exports = mongoose.model('Flow', FlowSchema);
