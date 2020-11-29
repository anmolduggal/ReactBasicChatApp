require("dotenv").config();
const express=require("express"),
	app=express(),
	cors=require("cors"),
	bodyParser=require("body-parser"),
	errorHandler=require("./handlers/error"),
	authRoutes=require("./routes/auth"),
	messageRoutes=require("./routes/message"),
	fetchMessageRoutes=require("./routes/fetchMessage"),
	searchRoutes=require("./routes/search"),
	friendRoutes=require("./routes/friend"),
	mongoose = require("mongoose"),
	{loginRequired,ensureCorrectUser}=require("./middleware/auth"),
	cool = require('cool-ascii-faces'),
	 port = process.env.PORT||8081;
const db=require("./models");
	 
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth",authRoutes);
app.use("/api/search/:id",loginRequired,ensureCorrectUser,searchRoutes);
app.use("/api/friend/:id",friendRoutes);

app.use("/api/users/:id/messages",loginRequired,ensureCorrectUser,messageRoutes);



app.use("/api/messages",loginRequired,fetchMessageRoutes);
app.get('/cool', (req, res) => res.send(cool()))
app.use((req,res,next)=>{
	let err=new Error("Not Found");
	err.status=404;
	next(err);
});

app.use(errorHandler);

app.listen(port,()=>{
	console.log('Server is starting on port '+port);
});