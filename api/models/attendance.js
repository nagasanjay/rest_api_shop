const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    rollNo: {type : Number, required: true},
    period: {type : Number, required: true},
    subject: {type: String, required: true},
    time: {type : Date, default :Date.now() }
});

module.exports = mongoose.model('Attendance', attendanceSchema);