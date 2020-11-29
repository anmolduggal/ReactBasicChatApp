const mongoose = require("mongoose"),
	bcrypt=require("bcrypt");
	const userSchema =new mongoose.Schema({
		email:{
			type:String,
			index:{unique:true},
			required:true
		},
		username:{
			type:String,
			index:{unique:true},
			required:true
		},
		password:{
			type:String,
			required:true
		},
		profileImageUrl:{
			type:String
		},
		messages:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:"Message"
		}],
		friendList:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		}],
		friendWaitingList:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		}],
		friendRequestedList:[{
			type:mongoose.Schema.Types.ObjectId,
			ref:"User"
		}]
	});
	userSchema.pre("save",async function(next){
		try{
			if(!this.isModified("password")){
				return next();
			}
			let hashedPassword=await bcrypt.hash(this.password,10);
			this.password=hashedPassword;
			return next();
		}
		catch(err){
			return next(err);
		}
	});
	userSchema.methods.comparePassword=async function(candidatePassword,next){
		try{
			let isMatch=await bcrypt.compare(candidatePassword,this.password);
			return isMatch;
		}
		catch(err){
			return next(err);
		}
	}
	const User=mongoose.model("User",userSchema);
	module.exports=User;