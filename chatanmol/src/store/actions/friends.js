import {addError} from "./errors";
import {apiCall} from "../../services/api";
import {LOAD_FRIENDS,LOAD_USERS} from "../actionTypes"
export const loadFriends=friends=>({
	type:LOAD_FRIENDS,
	friends
});
export const loadUsers=users=>({
	type:LOAD_USERS,
	users
});
export const fetchUsers=(SearchValue)=>{
	return (dispatch,getState)=>{
		let { currentUser }=getState();
		const id =currentUser.user.id;
		return apiCall("get",`/api/search/${id}/fetchUser/${SearchValue}`)
		.then(res=>{
			console.log(res);
			dispatch(loadUsers(res));

		})
		.catch(err=>{
			dispatch(addError(err.message));
		});
		};
	};
export const fetchFriends=()=>{
	return (dispatch,getState)=>{
		let { currentUser }=getState();
		const id =currentUser.user.id;
		return apiCall("get",`/api/search/${id}/friend`)
		.then(res=>{
			dispatch(loadFriends(res));
		})
		.catch(err=>{
			dispatch(addError(err.message));
		});
		};
	};
