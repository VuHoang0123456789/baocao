const Input = require('../models/input');

class inputContronller{
    //[Get] /Input/show
    showAll(req, res, next){

        Input.find()
         .then((inputs) =>{
            res.json(inputs);
         })
         .catch(next);
    }
    //[Get] /Input/show/id
    show(req, res, next){
        Input.findById({_id: req.params.id})
         .then((input) =>{
            res.json(input);
         })
         .catch(next);
    }
    //[Post] /Input/create
    create(req, res, next){
        const input = new Input({
            manv: req.body.manv,
            inputDay: req.body.inputDay,
        })

        input.save()
         .then(() => {
            res.send('create successfully');
         })
         .catch(next);
    }
    //[PUT] /Input/update/:id
    update(req, res, next)
    {
        Input.updateOne({_id: req.params.id}, req.body)
         .then(() =>{
            res.send('update successfully!');
         })
         .catch(next);
    }
    //[delete] /Input/delete/id
    delete(req, res, next){

        Input.deleteOne({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
    //[delete] /Input/delete-sort/id
    deleteSort(req, res, next){

        Input.delete({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
}

module.exports = new inputContronller
