const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    rollNo: {type: Number, required: true},
    name: {type : String, required: true}
});

module.exports = mongoose.model('Person', personSchema);