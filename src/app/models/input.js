const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Input = new Schema({
    manv: {type: String},
    inputDay: {type: Date},
},
{
    timestamps: true
});


Input.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});

module.exports = mongoose.model('Input', Input);
