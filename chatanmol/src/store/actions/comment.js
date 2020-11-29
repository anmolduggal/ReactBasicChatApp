import {addError} from "./errors";
import {apiCall} from "../../services/api";
import {LOAD_MESSAGES,REMOVE_MESSAGE} from "../actionTypes"
export const removeComment=(user_id,comment_id)=>{
	return dispatch=>{
		return apiCall("delete",`/api/users/${user_id}/comment/${comment_id}`).then(()=>dispatch(remove(message_id))).catch(err=>addError(err.message));
	};
};
export const fetchCommentes=(message_id)=>{
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
export const postNewComment=text=>(dispatch,getState,message_id)=>{
	let { currentUser }=getState();
    const id =currentUser.user.id;
    const mid=message_id;
	return apiCall("post",`/api/users/${id}/message/${mid}/comment`,{text}).then((res)=>{}).catch(err=>dispatch(addError(err.message)))
}