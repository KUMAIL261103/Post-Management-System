const postModel = require('../../model/postmodel');
exports.createpost= async(req,res)=>{
    try{
    const {username,post}=req.body;
    const newpost = await postModel.create({username,post});
    res.status(200).json({
        success:true,
        data:newpost,
        message:"new post created"
    })
    }
    catch(err){
        console.log(err);
        console.error(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message
        })
    }

}
