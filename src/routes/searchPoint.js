const express = require('express');
const router = express.Router();
const searchPointRouter = require('../controllers/searchPointController')

router.get('/diem', searchPointRouter.handleTraCuu);
module.exports = router;