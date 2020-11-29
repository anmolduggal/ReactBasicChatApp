import React, { Component } from "react";
import {connect} from "react-redux";
import Friend from "../components/Friend";
import {fetchFriends} from "../store/actions/friends";

class FriendList extends Component{
	componentDidMount(){
	this.props.fetchFriends();
		}
	render(){
		const {friends}=this.props;
		let friendList=friends.map(u=>(<Friend key={u._id}  username={u.username} profileImageUrl={u.profileImageUrl} 	/>));
		return (
			<div className="profile col-sm-2">
				<div className="scrollbar">
				
					{friendList}
								
			</div>					
			</div>
			)

		}
}
function mapStateToProps(state,ownProps){
	return{
		friends:state.friends,
		currentUser:state.currentUser.user.id
		};
}
export default connect(mapStateToProps,{fetchFriends})(FriendList);

