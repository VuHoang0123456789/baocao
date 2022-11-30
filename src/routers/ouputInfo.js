const express = require('express')
const router = express.Router()
const outputInfoController = require('../app/controllers/outputInfoController');

router.get('/show', outputInfoController.showAll);
router.get('/show/:id', outputInfoController.show);
router.put('/update/:id', outputInfoController.update);
router.delete('/delete/:id', outputInfoController.delete);
router.delete('/delete-sort/:id', outputInfoController.deleteSort);
router.post('/create', outputInfoController.create);

module.exports = router;
