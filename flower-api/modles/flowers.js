const { default: mongoose } = require('mongoose');
const DB=require('../config/config');

const flowersSchema=new DB.Schema({
    _id:String,
    title:String,
    image:String,
    description:String,
    productDetails:[String],
    price:Number,
    createAt:{
        type:Date,
        default:()=>{
            return Date.now()
        }
    },
    updateAt:{
        type:Date,
        default:()=>{
            return Date.now()
        }
    }
});

const flowers=DB.model('flowers',flowersSchema);

module.exports=flowers;
