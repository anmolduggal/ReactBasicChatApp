const express=require("express"),
	{loginRequired,ensureCorrectUser}=require("../middleware/auth"),
  router=express.Router();

const db=require("../models");
router.get("/",async function(req,res,next){

	try{
		let messages=await db.Message.find().sort({createdAt:"desc"}).populate("user",{
			username:true,
			profileImageUrl:true
		}).populate("to",{
			username:true,
			profileImageUrl:true
		});
		return res.status(200).json(messages);
	}
	catch(e){
		return next(e);
	}
});
router.get("/:id/friend/:friendId",ensureCorrectUser,async function(req,res,next){
try{
		console.log("server");
		let foundFriend=await db.User.findOne({username:req.params.friendId});
		console.log(foundFriend);
		let messages=await db.Message.find({$or:[{user:req.params.id,to:foundFriend._id},{user:foundFriend._id,to:req.params.id}]}).sort({createdAt:"desc"}).populate("user",{
			username:true,
			profileImageUrl:true
		});
		return res.status(200).json(messages);
	}
	catch(e){
		return next(e);
	}
});
 module.exports=router;
