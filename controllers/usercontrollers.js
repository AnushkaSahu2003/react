exports.home = function(req, res, next) {
    res.status(200).json({ success: true, message: "this is route" });
};
exports.create = async function(req,res,next){
    try{
        const newuser = newuser(req.body);
        await newuser.save();
        res.status(201).json({success:true,user:newuser});
    }
    catch(error){
        res.status(505).json({
            success:false,message:error.message
        });

    }
}