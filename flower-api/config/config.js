const DB=require('mongoose');


main().catch(err => console.log(err));

async function main() {
  await DB.connect('mongodb://127.0.0.1:27017/shop_flowers');
}


module.exports=DB;

