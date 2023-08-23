const postModel = require('../../model/postmodel');
exports.getpost= async(req,res)=>{
    try{
    const allpostdata = await postModel.find({});
    res.status(200).json({
        success:true,
        data:allpostdata,
        message:"all post fetched"
    })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            message:"internal server error",
            error:err.message
        })
    }

}
exports.getpostbyid= async(req,res)=>{
    try{
    const {id}=req.params;
    const postdata = await postModel.findById({_id: id});
    if(!postdata){
        res.status(404).json({
            success:false,
            message:`data not found of id-${id}`
            
        })
    }
    res.status(200).json({
        success:true,
        data:postdata,
        message:`post fetched of id-${id}`
    })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            message:"internal server error",
            error:err.message
        })
    }

}