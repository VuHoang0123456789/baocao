const express = require('express')
const router = express.Router()
const customerController = require('../app/controllers/customerController');

router.get('/show', customerController.showAll);
router.get('/show/:id', customerController.show);
router.put('/update/:id', customerController.update);
router.delete('/delete/:id', customerController.delete);
router.delete('/delete-sort/:id', customerController.deleteSort);
router.post('/create', customerController.create);

module.exports = router;
