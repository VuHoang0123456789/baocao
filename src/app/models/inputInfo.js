const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const InputInfo = new Schema({
    masp: {type: String},
    maNh: {type: String},
    unit: {type: String},
    amount: {type: Number},
    price: {type: Number},   
},
{
    timestamps: true
});


InputInfo.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});

module.exports = mongoose.model('InputInfo', InputInfo);
