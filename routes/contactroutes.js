const express = require('express');
const { submitContactForm } = require('../Controller/controller.js');

const router = express.Router();

router.post('/', submitContactForm);

module.exports = router;
