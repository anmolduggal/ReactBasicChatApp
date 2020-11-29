const db=require("../models"),
      express=require("express"),
	  router=express.Router(),
	  jwt =require("jsonwebtoken"),
	  {acceptFriend,addFriend,removeFriend}=require("../handlers/friend");

router.route("/accept/:friend_id").post(acceptFriend)
router.route("/:friend_id").post(addFriend).delete(removeFriend);
module.exports=router; 
