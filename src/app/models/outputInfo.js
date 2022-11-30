const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const OutputInfo = new Schema({
    masp: {type: String},
    madh: {type: String},
    unit: {type: String},
    amount: {type: Number},
    price: {type: Number},   
},
{
    timestamps: true
});


OutputInfo.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});

module.exports = mongoose.model('OutputInfo', OutputInfo);
