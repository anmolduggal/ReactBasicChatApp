import React from "react";
import {Switch,Route,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import SearchField from "../components/SearchField";
import {authUser} from "../store/actions/auth";	
import {removeError} from "../store/actions/errors"	;
import withAuth from "../hocs/withAuth";
import MessageForm from "./MessageForm";

const Main =props=>{
	const { authUser,errors,removeError ,currentUser}=props;
	return(
			<Switch>
				<Route exact path="/"  component={props=><Homepage currentUser={currentUser}  {...props} />}/>
				<Route exact path="/signin" render={props=>{
					return(
						<AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Log In" heading="Welcome Back"  {...props}/>
						)
				}}/>
				<Route exact path="/signup" render={props=>{
					return(
						<AuthForm removeError={removeError} errors={errors} onAuth={authUser} buttonText="Sign Me Up" signUp heading="Join right Now"  {...props}/>
						);
				}}/>
				<Route path="/users/:id/messages/new" component={withAuth(MessageForm)} />
				<Route path="/profile/:username" component={withAuth(props=><Homepage currentUser={currentUser} to={true} {...props} />) }/> 
/**/				 	<Route path="/search/:searchValue" component={withAuth(props=><SearchField {...props}/>)}	/>			
			</Switch>
	);
};
function mapStateToProps(state,ownProps){
	return({
		currentUser:state.currentUser,
		errors:state.errors	
	});
}

export default withRouter(connect(mapStateToProps,{ authUser,removeError })(Main));