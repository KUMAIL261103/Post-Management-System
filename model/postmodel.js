const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
    {   username:{
            type:String,
            required:true,
            maxLength:30,
        },
        post:{
            type:String,
            required:true,
            maxLength:200,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now(),
        },
        updateAt:{
            type:Date,
            required:true,
            default:Date.now(),
        }
    }
);
module.exports = mongoose.model("postmodel",postSchema);