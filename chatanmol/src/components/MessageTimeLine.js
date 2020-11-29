import React from "react";
import MessageList from "../containers/MessageList";
import FriendMessageList from "../containers/FriendMessageList";

import UserAside from "./UserAside";
import AllUsers from "./AllUsers";


 const MessageTimeLine=props=>{
	if(props.to==true){
		return(<div className="row">
			<AllUsers />
			<FriendMessageList to={props.to} profile={props.profile} />
			<UserAside profileImageUrl={props.profileImageUrl} username={props.username}/>
			
		</div>
		);
	}
	return(
	<div className="row">
			<AllUsers />
			<MessageList/>
			<UserAside profileImageUrl={props.profileImageUrl} username={props.username}/>

		</div>
		);
	};
export default MessageTimeLine;