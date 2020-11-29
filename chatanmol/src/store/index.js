import rootReducer from "./reducers";
import { createStore,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";

export function configureStore(){
	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const store = createStore(rootReducer,composeEnhancer(applyMiddleware(thunk)));
	return store;
}
