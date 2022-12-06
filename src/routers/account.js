const express = require('express')
const Router = express.Router();
const accountController = require('../app/controllers/accountController');


Router.get('/show', accountController.showAll);
Router.get('/show/:id', accountController.show);
Router.post('/create', accountController.create);
Router.put('/update/:id', accountController.update);
Router.delete('/delete-Sort/:id', accountController.deleteSort);
Router.delete('/delete/:id', accountController.delete);

module.exports = Router;
