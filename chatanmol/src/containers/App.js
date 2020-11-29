import React from "react";
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router } from "react-router-dom";
import Navabar from "./Navbar";
import Main from "./Main";
import {setAuthorizationToken,setCurrentUser} from "../store/actions/auth";
import jwtDecode from "jwt-decode";


const store=configureStore();
if(localStorage.jwtToken){
	setAuthorizationToken(localStorage.jwtToken);
	try{
		store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtTokens)));
	}catch(e){
		store.dispatch(setCurrentUser({}));
	}
}
const App=(props)=>(
  <Provider store={store}>
		 <Router>
		 	<div className="onboarding ">
		 		<Navabar {...props}/>
		 		<Main />
		 	</div>
  		</Router>
  </Provider>
);

export default App;
