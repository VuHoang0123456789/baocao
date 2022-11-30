const express = require('express')
const router = express.Router()
const inputController = require('../app/controllers/inputController');

router.get('/show', inputController.showAll);
router.get('/show/:id', inputController.show);
router.put('/update/:id', inputController.update);
router.delete('/delete/:id', inputController.delete);
router.delete('/delete-sort/:id', inputController.deleteSort);
router.post('/create', inputController.create);

module.exports = router;
