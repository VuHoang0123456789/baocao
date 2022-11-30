const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Customer = new Schema({
    _id: {type: Number},
    ma: {type: String, default: 'kh'},
    maKh: {type: String, default: ''},
    name: {type: String, maxlength: 255},
    address: {type: String, maxlength: 1000},
    phone: {type: String, maxlength: 11},
},
{
    _id: false,
    timestamps: true
});

Customer.query.sortable = function (req){;
    return this.sort({
        _id: 'desc',
    });
  }

Customer.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});
 
Customer.plugin(AutoIncrement);

module.exports = mongoose.model('Customer', Customer);
