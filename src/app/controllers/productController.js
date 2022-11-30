const Product = require('../models/product');

class productContronller{
    //[Get] /product/show
    showAll(req, res, next){

        Product.find()
         .then((products) =>{
            res.json(products);
         })
         .catch(next);
    }
    //[Get] /product/show/id
    show(req, res, next){
        Product.findById({_id: req.params.id})
         .then((product) =>{
            res.json(product);
         })
         .catch(next);
    }
    //[Post] /product/create
    create(req, res, next){
        const product = new Product({
            name: req.body.name,
            supplier: req.body.supplier,
            amount: req.body.amount,
            fee: req.body.fee,
        })

        product.save()
         .then(() => {
            Product.findOne().sortable()
            .then((products) => {
                console.log(products)
                product.masp = products.ma + products.sp;
                Product.updateOne({_id: products._id}, product)
                .then(()=>{
                    res.send('create successfully');
                })
                .catch(next);
            })
            .catch(next);
         })
         .catch(next);
    }
    //[PUT] /product/update/:id
    update(req, res, next)
    {
        Product.updateOne({_id: req.params.id}, req.body)
         .then(() =>{
            res.send('update successfully!');
         })
         .catch(next);
    }
    //[delete] /product/delete/id
    delete(req, res, next){

        Product.deleteOne({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
    //[delete] /product/delete-sort/id
    deleteSort(req, res, next){

        Product.delete({_id: req.params.id})
         .then(() => {
            res.send('delete successfully!');
         })
         .catch(next);
    }
}

module.exports = new productContronller
