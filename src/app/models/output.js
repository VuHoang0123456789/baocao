const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Output = new Schema({
    manv: {type: String},
    makh: {type: String},
    timeOrder: {type: Date},
    outputDay: {type: Date},
    deliveryDay: {type: Date},
    paymentMethods: {type: String},
},
{
    timestamps: true
});


Output.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});

module.exports = mongoose.model('Output', Output);
