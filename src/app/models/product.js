const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Product = new Schema({
    sp: {type: Number},
    ma: {type: String, default: 'sp'},
    masp: {type: String, default: ''},
    name: {type: String, maxlength: 255},
    supplier: {type: String},
    amount: {Number},
    fee: {type: Number},
},
{
    sp: false,
    timestamps: true
});

Product.query.sortable = function (req){;
    return this.sort({
        sp: 'desc',
    });
  }

Product.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});
 
Product.plugin(AutoIncrement, {inc_field: 'sp'});

module.exports = mongoose.model('Product', Product);
