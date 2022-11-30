const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const Employee = new Schema({
    id: {type: Number},
    ma: {type: String, default: 'nv'},
    manv: {type: String, default: ''},
    name: {type: String, maxlength: 255},
    type: {type: String}
},
{
    id: false,
    timestamps: true
});

Employee.query.sortable = function (req){;
    return this.sort({
        id: 'desc',
    });
  }

Employee.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});
 
Employee.plugin(AutoIncrement, {inc_field: 'id'});

module.exports = mongoose.model('Employee', Employee);
