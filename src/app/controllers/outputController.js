const Output = require('../models/output');

class outputContronller{
    //[Get] /Output/show
    showAll(req, res, next){

        Output.find()
         .then((outputs) =>{
            res.json(outputs);
         })
         .catch(next);
    }
    //[Get] /Output/show/id
    show(req, res, next){
        Output.findById({_id: req.params.id})
         .then((output) =>{
            res.json(output);
         })
         .catch(next);
    }
    //[Post] /Output/create
    create(req, res, next){
        const output = new Output({
            manv: req.body.manv,
            makh: req.body.makh,
            timeOrder: req.body.timeOrder,
            outputDay: req.body.outputDay,
            deliveryDay: req.body.deliveryDay,
            paymentMethods: req.body.paymentMethods,
        })

        output.save()
         .then(() => {
            res.send('create successfully');
         })
         .catch(next);
    }
    //[PUT] /Output/update/:id
    update(req, res, next)
    {
        Output.updateOne({_id: req.params.id}, req.body)
         .then(() =>{
            res.send('update successfully!');
         })
         .catch(next);
    }
    //[delete] /Output/delete/id
    delete(req, res, next){

        Output.deleteOne({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
    //[delete] /Output/delete-sort/id
    deleteSort(req, res, next){

        Output.delete({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
}

module.exports = new outputContronller
