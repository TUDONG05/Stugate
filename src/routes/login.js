// login.js
const express = require('express');
const router = express.Router();
const getLogin = require('../controllers/loginController'); // import function trực tiếp

router.post('/', getLogin);


router.get('/', (req, res) => {
    res.render('login'); 
});

module.exports = router;
