const mongoose = require('mongoose');

const timeTableSchema = mongoose.Schema({
    day: {type: Number, required: true},
    period: {type : Number, required: true},
    subject: {type: String, required: true},
});

module.exports = mongoose.model('Attendance', attendanceSchema);