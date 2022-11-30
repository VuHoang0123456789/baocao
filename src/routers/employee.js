const express = require('express');
const router = express.Router();
const employeeController = require('../app/controllers/employeeController');

router.get('/show', employeeController.showAll);
router.get('/show/:id', employeeController.show);
router.put('/update/:id', employeeController.update);
router.delete('/delete/:id', employeeController.delete);
router.delete('/delete-sort/:id', employeeController.deleteSort);
router.post('/create', employeeController.create);


module.exports = router;
