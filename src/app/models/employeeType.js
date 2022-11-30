const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const employeeType = new Schema({
    name: {type: String},
},
{
    timestamps: true
});

employeeType.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});
 

module.exports = mongoose.model('employeeType', employeeType);
