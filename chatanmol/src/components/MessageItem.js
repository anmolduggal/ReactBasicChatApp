import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
import defaultImage from "../images/egg.jpg"
 const MessageItem = ({date,profileImageUrl,text,username,removeMessage,isCorrectUser})=>(
	<div>
		<li className="list-group-item">
			<img src={profileImageUrl || defaultImage} alt={username} className="timeline-image"/>
			<div className="message-area">
				<Link to={'/profile/'+username}>@{username}&nbsp;</Link>
				<span className="text-muted">
					<Moment className ="text-muted" format="Do MMM YYYY HH:mm:ss">
						{date}
					</Moment>
					{isCorrectUser &&(
						<span className="deleteButton">
							<a className="btn" onClick={removeMessage}>
								<i className="fas fa-trash"></i>
							</a>
						</span>
					)}
				</span>
				<p>{text}{isCorrectUser}</p>
			</div>
		</li>
	</div>
);
 export default MessageItem;