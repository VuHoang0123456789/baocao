const mongoose = require('mongoose');
async function connect()
{
    try 
    {
        await mongoose.connect('mongodb://127.0.0.1:27017/quanLyMayTinh');
        console.log('connect sucessfully');
        
    } catch (error) 
    {
        console.log('connect false');
    }
}


module.exports = {connect};
