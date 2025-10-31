const express = require('express');
const router = express.Router();
const timetableController = require('../controllers/timeTableController');

router.get('/sv/tkb', timetableController.getTimetable);

module.exports = router;
