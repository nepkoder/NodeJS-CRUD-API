var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// document for database mongodb
var product = new Schema({
    name: String,
    price: String
});

module.exports = mongoose.model('product', product);