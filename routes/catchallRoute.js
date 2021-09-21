const express = require('express');
const router = express.Router();

const { catchall } = require('../controllers/catchall.js');

router.route('/').get(catchall)

module.exports = router;