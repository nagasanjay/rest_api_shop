const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const checkAuth = require('../middleware/checkAuth');
const Attendance = require('../models/attendance');

router.post('/:rollNo', checkAuth, (req, res, next) => {
    const today = Date();
    const day = today.getDay();
    
})