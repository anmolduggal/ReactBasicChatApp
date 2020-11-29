import React, { Component } from "react";
import {Link} from "react-router-dom";
import MessageTimeLine from "./MessageTimeLine";
const Homepage=({currentUser,to,match})=>{
	if(!currentUser.isAuthenticated){
	return(<div className="home-hero">
		<h1>What's Up??</h1>
		<h4>New to Messaging App??</h4>
		<Link to="/signup" className="btn btn-primary">
			Sign Up Here
		</Link>
		</div>
	);
	}
	else if(to===true && currentUser.user.username!==match.params.username){

	return(
		<div>
		<MessageTimeLine profileImageUrl={currentUser.profileImageUrl} username={currentUser.user.username} profile={match.params.username} to={true} />
		</div>
		);
	}
	return(
		<div>
			<MessageTimeLine profileImageUrl={currentUser.profileImageUrl} username={currentUser.username} to={false}/>
		</div>
		);
	};
export default Homepage;