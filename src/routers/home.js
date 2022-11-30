const express = require('express')
const router = express.Router()
const homController = require('../app/controllers/homeController');

router.get('/home', homController.show);

module.exports = router;
