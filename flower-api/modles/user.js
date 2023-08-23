const { model } = require('mongoose');
const DB=require('../config/config');


const user=new DB.Schema({
    _id:String,
    name:String,
    email:String,
    phone:String,
    type:Number,
    token:String
});

const users=DB.model('users',user);

module.exports=users;