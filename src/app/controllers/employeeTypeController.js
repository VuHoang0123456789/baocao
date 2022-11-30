const EmployeeType = require('../models/employeeType');

class employeeTypeController{

    //[GET] /employeeType/show
    showAll(req, res, next)
    {
        EmployeeType.find()
         .then((employeeTypes) =>{
            res.json(employeeTypes);
         })
         .catch(next);
    }
    //[GET] /employeeType/show/:id
    show(req, res, next)
    {
        EmployeeType.findOne({_id: req.params.id})
         .then((employeeType) =>{
            res.json(employeeType);
         })
         .catch(next);
    }
    //[PUT] /employeeType/update/:id
    update(req, res, next)
    {
        EmployeeType.updateOne({_id: req.params.id}, req.body)
         .then(() =>{
            res.send('update successfully!');
         })
         .catch(next);
    }
    //[POST] /employeeType/create
    create(req, res, next)
    {
        const employeeType = new EmployeeType({
            name: req.body.name,
        })

        employeeType.save()
            .then(() => {
                res.send('create successfully!')
            })
            .catch(next);
    }
    //[delete] /employeeType/delete/id
    delete(req, res, next){
        EmployeeType.deleteOne({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
    //[delete] /employeeType/delete-sort/id
    deleteSort(req, res, next){
        EmployeeType.delete({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }

}

module.exports = new employeeTypeController;
