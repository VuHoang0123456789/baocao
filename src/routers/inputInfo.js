const express = require('express')
const router = express.Router()
const InputInfoContronller = require('../app/controllers/inputInfoController');

router.get('/show', InputInfoContronller.showAll);
router.get('/show/:id', InputInfoContronller.show);
router.put('/update/:id', InputInfoContronller.update);
router.delete('/delete/:id', InputInfoContronller.delete);
router.delete('/delete-sort/:id', InputInfoContronller.deleteSort);
router.post('/create', InputInfoContronller.create);

module.exports = router;
