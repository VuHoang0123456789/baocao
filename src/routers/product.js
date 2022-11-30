const express = require('express')
const router = express.Router()
const productController = require('../app/controllers/productController');

router.get('/show', productController.showAll);
router.get('/show/:id', productController.show);
router.put('/update/:id', productController.update);
router.delete('/delete/:id', productController.delete);
router.delete('/delete-sort/:id', productController.deleteSort);
router.post('/create', productController.create);

module.exports = router;
