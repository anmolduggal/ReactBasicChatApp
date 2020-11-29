import {LOAD_USERS} from "../actionTypes"

const users=(state=[],action)=>{
	switch(action.type){
		case LOAD_USERS:
			console.log("runnn");
			return [...action.users];
	default:
	return state;
	}
}
export default users;