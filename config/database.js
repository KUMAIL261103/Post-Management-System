const mongoose = require('mongoose');
require('dotenv').config();
const databaseconnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewURLParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connection established with db😀");
    }).catch((err)=>{
        console.error(err);
        console.log(`connection failed😣 due to ${err}`);
        process.exit(1);
    }) 
}
module.exports = databaseconnect;