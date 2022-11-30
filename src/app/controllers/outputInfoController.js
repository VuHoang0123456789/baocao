const OutputInfo = require('../models/outputInfo');

class outputInfoContronller{
    //[Get] /OutputInfo/show
    showAll(req, res, next){

        OutputInfo.find()
         .then((outputInfos) =>{
            res.json(outputInfos);
         })
         .catch(next);
    }
    //[Get] /OutputInfo/show/id
    show(req, res, next){
        OutputInfo.findById({_id: req.params.id})
         .then((outputInfo) =>{
            res.json(outputInfo);
         })
         .catch(next);
    }
    //[Post] /OutputInfo/create
    create(req, res, next){
        const outputInfo = new OutputInfo({
            masp: req.body.masp,
            madh: req.body.madh,
            unit: req.body.unit,
            amount: req.body.amount,
            price: req.body.price,
        })

        outputInfo.save()
         .then(() => {
            res.send('create successfully');
         })
         .catch(next);
    }
    //[PUT] /OutputInfo/update/:id
    update(req, res, next)
    {
        OutputInfo.updateOne({_id: req.params.id}, req.body)
         .then(() =>{
            res.send('update successfully!');
         })
         .catch(next);
    }
    //[delete] /OutputInfo/delete/id
    delete(req, res, next){

        OutputInfo.deleteOne({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
    //[delete] /OutputInfo/delete-sort/id
    deleteSort(req, res, next){

        OutputInfo.delete({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
}

module.exports = new outputInfoContronller
