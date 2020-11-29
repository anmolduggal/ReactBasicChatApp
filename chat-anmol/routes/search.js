const db=require("../models"),
      express=require("express"),
	  router=express.Router(),
	  jwt =require("jsonwebtoken");
router.get("/friend",async function(req,res,next){
	try{
	let Friends=await db.User.find({},{username:1,profileImageUrl:1});
	return res.status(200).json(Friends);
	}catch(err){
		return next(err);
	}
});
router.get("/fetchUser/:name",async function(req,res,next){
	try{
    	   const regex = new RegExp(escapeRegex(req.params.name), 'gi');
       	let Users=await db.User.find({$or:[{email:regex},{username:regex}]}	,{username:1,profileImageUrl:1});
		const token=req.headers.authorization.split(" ")[1];
		let UserId;
		jwt.verify(token,process.env.SECRET_KEY,function(err,decoded){
			 UserId=decoded.id;
		});
		return res.status(200).json(Users);
		
		}
		catch(err){
		return next(err);
	}
});
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
 module.exports=router;
