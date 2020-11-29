import React, { Component } from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../store/actions/friends";
import SearchItem from "../components/SearchItem";
class SearchList extends Component{
componentDidMount(){
	console.log("componentDidMount")
	if(this.props.SearchValue.length>0){
	this.props.fetchUsers(this.props.SearchValue);
		}}
componentDidUpdate(prevProps,prevState){
		console.log("ccffwfwfc");

	if(this.props.SearchValue.length>0&&this.props.SearchValue!==prevProps.SearchValue){
	this.props.fetchUsers(this.props.SearchValue);
		}
		}
		componentWillUnmount(){
			console.log("Rrrrrr");
			this.setState(
				{"users":""}
			);
			
		}
	render(){
		const {users}=this.props;
		let UserList=users.map(m=>(<SearchItem key={m._id}  username={m.username} profileImageUrl={m.profileImageUrl}  	/>));
		return (
					<table className="table table-striped table-dark rounded-lg mb-0">
  						<tbody>
							{UserList}
						</tbody>
					</table>
			)
		}	
	}

function mapStateToProps(state,ownProps){
	return{
		users:state.users,
		currentUser:state.currentUser.user.id
		};
}
export default connect(mapStateToProps,{fetchUsers})(SearchList); 	 	