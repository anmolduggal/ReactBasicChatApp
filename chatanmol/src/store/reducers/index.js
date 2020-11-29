import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./error";
import messages from "./messages";
import friends from "./friends";
import users from "./users";
const rootReducer=combineReducers({
	currentUser,
	errors,
	messages,
	friends,
	users
});

export default rootReducer;