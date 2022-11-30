const express = require('express');
const router = express.Router();
const employeeTypeController = require('../app/controllers/employeeTypeController');

router.get('/show', employeeTypeController.showAll);
router.get('/show/:id', employeeTypeController.show);
router.put('/update/:id', employeeTypeController.update);
router.delete('/delete/:id', employeeTypeController.delete);
router.delete('/delete-sort/:id', employeeTypeController.deleteSort);
router.post('/create', employeeTypeController.create);


module.exports = router;
