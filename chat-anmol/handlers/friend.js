const db=require("../models"),
	  jwt =require("jsonwebtoken");
var mongoose = require('mongoose');
exports.acceptFriend=async function(req,res,next){
	Friend=db.User.findById(req.params.friend_id);
	console.log(Friend);

};
exports.addFriend=async function(req,res,next){
	try{
		let UserId=req.baseUrl.split('/api/friend/')[1];
		console.log(UserId);
		UserId=mongoose.Types.ObjectId(UserId)
		Friend=await db.User.findById(req.params.friend_id);
		Friend.friendRequestedList.push(UserId);
		await Friend.save();
		return res.status(200).json(Friend);
}
catch(err){
		next(err); 
	}

};
exports.removeFriend=async function(req,res,next){};
