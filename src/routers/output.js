const express = require('express')
const router = express.Router()
const outputController = require('../app/controllers/outputController');

router.get('/show', outputController.showAll);
router.get('/show/:id', outputController.show);
router.put('/update/:id', outputController.update);
router.delete('/delete/:id', outputController.delete);
router.delete('/delete-sort/:id', outputController.deleteSort);
router.post('/create', outputController.create);

module.exports = router;
