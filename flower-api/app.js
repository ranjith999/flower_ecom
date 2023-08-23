const express=require('express');
const { mongoose } = require('mongoose');
const flowers=require('./modles/flowers.js');
const users=require('./modles/flowers.js');
const cors = require('cors');

const PORT=3221;
const app=express();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(cors({
    origin: '*'
}));


app.post('/product',function(req,res){
    console.log(req.body);
    var insert_data=req.body;
    var id=new mongoose.Types.ObjectId();
    const flo=new flowers({
        _id:id.toString(),
        title:insert_data.title,
        description:insert_data.desc,
        productDetails:insert_data.details,
        price:insert_data.price,
        image:insert_data.image
    });
   
  flo.save().then(
    res.send('Inserted')
    );
 
});
app.get('/product',function(req,res){

    const allflower=flowers.find({}).lean().then(flowers=>res.json(flowers))

});
app.post('/user',function(req,res){
    console.log(req.body);
    var insert_data=req.body;
    var id=new mongoose.Types.ObjectId();
    const flo=new flowers({
        _id:id.toString(),
        title:insert_data.title,
        description:insert_data.title,
        productDetails:['test'],
        price:20
    });
   
  flo.save().then(
    res.send('Inserted')
    );
 
});

app.listen(PORT,function(){
    console.log(`http://localhost:${PORT}`);
});


