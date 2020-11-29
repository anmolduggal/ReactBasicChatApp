import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchFriendMessages,removeMessage} from "../store/actions/messages";
import MessageItem from "../components/MessageItem";
import {postNewMessage} from "../store/actions/messages";
class FriendMessageList extends Component{
componentDidMount(){
	var intervalID=0;
		const {profile}=this.props;
	this.props.fetchFriendMessages(profile);
	this.intervalID=setInterval(
	    function() {
        	this.props.fetchFriendMessages(profile);
    	}
    	.bind(this),
    	3000
		);
}
componentDidUpdate(prevProps,prevState){
	const {profile,messages}=this.props;
	  clearInterval(this.intervalID);
		this.intervalID=setInterval(
	    function() {
        	this.props.fetchFriendMessages(profile);
    	}
    	.bind(this),
    	3000
		);
	if(profile!==prevProps.profile||JSON.stringify(messages)!==JSON.stringify(prevProps.messages)){
		this.props.fetchFriendMessages(profile);
	}}		
componentWillUnmount() {
  clearInterval(this.intervalID);
}
	constructor(props){
			super(props);
			this.state={message:""};
			
			}
	handleNewMessage=(event)=>{
		event.preventDefault();
		if(this.state.message!==""){
		this.props.postNewMessage(this.state.message,this.props.profile);
		}
		this.setState({message:""});

	};

	render(){
		const {messages,currentUser,removeMessage,profile}=this.props;

		let friendMessageList=messages.map(m=>(<MessageItem key={m._id} date={m.createdAt} text={m.text} username={m.user.username} profileImageUrl={m.user.profileImageUrl} removeMessage={removeMessage.bind(this,m.user._id,m._id)} isCorrectUser={currentUser===m.user._id}	/>));
		return (
			<div className="row col-sm-8">
				<div className=" col-sm-12">
				<h4>{profile}</h4>
			<form onSubmit={this.handleNewMessage} >
					{this.props.errors.message &&(
						<div className="alert alert-danger">{this.props.errors.message}</div>
					)}
					<div className="row mb-2">
							<div className="col-sm-11 pr-0">
									<input type="text" className="form-control" value={this.state.message} onChange={e=>this.setState({message:e.target.value})}/>
							</div>
							<div className="col-sm-1">
									<button  type="submit" className="btn btn-success pull-right" >
										<i className="fas fa-arrow-alt-circle-right"></i>
									</button>
							</div>
					</div>
			</form>
			<div className=" profile friendMessageBox p-0">
					<ul className="list-group" id="messages">
						{friendMessageList}
					</ul>
				</div>
			</div>
			</div>
			)
		}	
	}

function mapStateToProps(state,ownProps){
	return{
		messages:state.messages,
		currentUser:state.currentUser.user.id,
		errors:state.errors

		};
}
export default connect(mapStateToProps,{fetchFriendMessages,removeMessage,postNewMessage})(FriendMessageList);