var mongoose = require('mongoose');

var ProxySchema = new mongoose.Schema({
    name: String,
    description: String,
    endpoint: String,
    providers: [String]
});

module.exports = mongoose.model('Proxy', ProxySchema);
