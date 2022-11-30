const Employee = require('../models/employee');

class employeeController{
    //[GET] /employee/show
    showAll(req, res, next)
    {
        Employee.find()
         .then((employees) => {
            res.json(employees);
         })
         .catch(next);
    }
    //[GET] /employee/show
    show(req, res, next)
    {
        Employee.findOne({_id: req.params.id})
         .then((employee) => {
          res.json(employee);
        })
        .catch(next);
    }
    //[post] /employee/create
    create(req, res, next)
    {
        const employee = new Employee({
            name: req.body.name,
            type: req.body.type,
        })

        employee.save()
            .then(() => {
                Employee.findOne().sortable()
                .then((employees) => {
                    employee.manv = employees.ma + employees.id;
                    Employee.updateOne({_id: employees._id}, employee)
                    .then(()=>{
                        res.send('create successfully!')
                    })
                    .catch(next);
                })
                .catch(next);
            })
            .catch(next);
    }
    //[put] /employee/update
    update(req, res, next)
    {
        Employee.updateOne({_id: req.params.id}, req.body)
         .then(() => {
            res.send('update successfully!');
         })
         .catch(next);
    }
    //[delete] /employee/delete/id
    delete(req, res, next)
    {
        Employee.deleteOne({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
    //[delete] /employee/deleteSort/id
    deleteSort(req, res, next)
    {
        Employee.delete({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
}

module.exports = new employeeController;
