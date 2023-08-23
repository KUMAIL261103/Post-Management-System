const postModel = require('../../model/postmodel');
exports.deletepost = async(req,res)=>{
   try{
    const {id}= req.params;
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
        success:true,
        message:`post deleted of id-${id}`
    })
   }catch(err){
     res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"data not deleted"
        })
   }
}