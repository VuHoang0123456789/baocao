const InputInfo = require('../models/inputInfo');

class InputInfoContronller{
   //[Get] /InputInfo/show
   showAll(req, res, next){
        InputInfo.find()
         .then((inputInfos) =>{
            res.json(inputInfos);
         })
         .catch(next);
   }
   //[Get] /InputInfo/show/id
   show(req, res, next){
        InputInfo.findById({_id: req.params.id})
         .then((inputInfo) =>{
            res.json(inputInfo);
         })
         .catch(next);
   }
   //[Post] /InputInfo/create
   create(req, res, next){
      const inputInfo = new InputInfo({
         masp: req.body.masp,
         maNh: req.body.maNh,
         unit: req.body.unit,
         amount: req.body.amount,
         price: req.body.price,
      })

      inputInfo.save()
      .then(() => {
         res.send('create successfully');
      })
      .catch(next);
   }
   //[PUT] /InputInfo/update/:id
   update(req, res, next)
   {
      InputInfo.updateOne({_id: req.params.id}, req.body)
      .then(() =>{
         res.send('update successfully!');
      })
      .catch(next);
   }
   //[delete] /InputInfo/delete/id
   delete(req, res, next){

      InputInfo.deleteOne({_id: req.params.id})
      .then(() => {
         res.send('delete successfully!');
      })
      .catch(next);
   }
   //[delete] /InputInfo/delete-sort/id
   deleteSort(req, res, next){

      InputInfo.delete({_id: req.params.id})
      .then(() => {
         res.send('delete successfully!');
      })
      .catch(next);
   }
}

module.exports = new InputInfoContronller
