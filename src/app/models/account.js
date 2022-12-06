const mongoose = require('mongoose');
const mongoosedelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Account = new Schema({
    usename: {type: String, maxlength: 255},
    showname: {type: String, maxlength: 255},
    email: {type: String, maxlength: 1000},
    password: {type: String, maxlength: 11},
    avartar: {type: String},
    maKh: {type: String},
},
{
    timestamps: true
});

Account.plugin(mongoosedelete, {
    deletedAt: true,
    overrideMethods: 'all' ,
});

module.exports = mongoose.model('Account', Account);
