import {LOAD_MESSAGES,REMOVE_MESSAGE,UPDATE_MESSAGE} from "../actionTypes"

const message=(state=[],action)=>{
	switch(action.type){
		case LOAD_MESSAGES:
			return [...action.messages];
		case REMOVE_MESSAGE:
			return state.filter(message=>message._id!==action.id);
		case UPDATE_MESSAGE:
		return [action.message,...state];	
	 
	default:
	return state;
	}
}
export default message;