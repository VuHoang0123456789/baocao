const Customer = require('../models/customer');

class customerController{

    //[GET] /customer/show
    showAll(req, res, next)
    {
        Customer.find()
         .then((customers) =>{
            res.json(customers);
         })
         .catch(next);
    }
    //[GET] /customer/show/:id
    show(req, res, next)
    {
        Customer.findById({_id: req.params.id})
         .then((customer) =>{
            res.json(customer);
         })
         .catch(next);
    }
    //[PUT] /customer/update/:id
    update(req, res, next)
    {
        Customer.updateOne({_id: req.params.id}, req.body)
         .then(() =>{
            res.send('update successfully!');
         })
         .catch(next);
    }
    //[POST] /customer/create
    create(req, res, next)
    {
        const customer = new Customer({
            name: req.body.name,
            address: req.body.address,
            phone: req.body.phone,
        })

        customer.save()
            .then(() => {
                Customer.findOne().sortable()
                .then((customers) => {
                    customer.maKh = customers.ma + customers._id;
                    Customer.updateOne({_id: customers._id}, customer)
                    .then(()=>{
                        res.send('create successfully!')
                    })
                    .catch(next);
                })
                .catch(next);
            })
            .catch(next);
    }
    //[delete] /customer/id
    delete(req, res, next){
        Customer.deleteOne({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
    //[delete] /customer/delete-sort/id
    deleteSort(req, res, next){
        Customer.delete({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }

}

module.exports = new customerController;
