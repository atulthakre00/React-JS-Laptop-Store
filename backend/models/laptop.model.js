const mongoose = require('mongoose');

const laptopSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ram: {type: String, required: true},
    display: {type: String, required: true},
    memory: {type: String, required: true},
    processor: {type: String, required: true},
    price: {type: String, required: true},
    imageUrl: {type: String, required: true},
    quantity: {type: String, required: true}
})

module.exports = mongoose.model('laptops', laptopSchema);