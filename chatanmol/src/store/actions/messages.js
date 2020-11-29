import {addError} from "./errors";
import {apiCall} from "../../services/api";
import {LOAD_MESSAGES,REMOVE_MESSAGE,UPDATE_MESSAGE} from "../actionTypes"
export const loadMessages=messages=>({
	type:LOAD_MESSAGES,
	messages
});
export const remove=id=>({
	type:REMOVE_MESSAGE,
	id
});
export const update=message=>({
	type:UPDATE_MESSAGE,
	message
});
export const removeMessage=(user_id,message_id)=>{
	return dispatch=>{
		return apiCall("delete",`/api/users/${user_id}/messages/${message_id}`).then(()=>dispatch(remove(message_id))).catch(err=>addError(err.message));
	};
};
export const fetchMessages=()=>{
	return dispatch=>{
		return apiCall("get","/api/messages")
		.then(res=>{
			dispatch(loadMessages(res));
		})
		.catch(err=>{
			dispatch(addError(err.message));
		});
		};
	};
export const fetchFriendMessages=(friend_id)=>(dispatch,getState)=>{
	let { currentUser }=getState();
	const id =currentUser.user.id;
		return apiCall("get",`/api/messages/${id}/friend/${friend_id}`)
		.then(res=>{
			dispatch(loadMessages(res));
		})
		.catch(err=>{
			dispatch(addError(err.message));
		});	
		};
export const postNewMessage=(text,to)=>{
	return (dispatch,getState)=>{
	let { currentUser }=getState();
	const id =currentUser.user.id;
	return apiCall("post",`/api/users/${id}/messages`,{text,to}).then((res)=>{dispatch(update(res));}).catch(err=>dispatch(addError(err.message)))
}}