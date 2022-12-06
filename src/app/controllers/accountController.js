const Account = require('../models/Account');

class AccountContronller{
    //[Get] /Account/show
    showAll(req, res, next){

        Account.find()
         .then((accounts) =>{
            res.json(accounts);
         })
         .catch(next);
    }
    //[Get] /Account/show/id
    show(req, res, next){
        Account.findById({_id: req.params.id})
         .then((accounts) =>{
            res.json(accounts);
         })
         .catch(next);
    }
    //[Post] /Account/create
    create(req, res, next){
        const account = new Account({
            usename: req.body.usename,
            password: req.body.password,
            email: req.body.email,
            avartar: req.body.avartar,
            maKh: req.body.maKh,
        })

        account.save()
         .then(() => {
            res.send('create successfully');
         })
         .catch(next);
    }
    //[PUT] /Account/update/:id
    update(req, res, next)
    {
        Account.updateOne({_id: req.params.id}, req.body)
         .then(() =>{
            res.send('update successfully!');
         })
         .catch(next);
    }
    //[delete] /Account/delete/id
    delete(req, res, next){

        Account.deleteOne({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
    //[delete] /Account/delete-sort/id
    deleteSort(req, res, next){

        Account.delete({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
}

module.exports = new AccountContronller
