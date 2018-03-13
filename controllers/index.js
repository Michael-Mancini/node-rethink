const express = require('express');
let router = express.Router();

// first route will handle the static html file
router.use('/', require('./home'));
// second route will handle the api calls
router.use('/polls', require('./polls'));

module.exports = router;