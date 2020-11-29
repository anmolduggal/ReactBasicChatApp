	import React, { Component } from "react";
import {Link,withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/auth";
import SearchField from "../components/SearchField";
class Navbar extends Component{
logout=e=>{
	e.preventDefault();
	this.props.logout();
}
constructor(props){
		super(props);
		this.state={
			search:""
		};
	}
handleSubmit=event=>{
		event.preventDefault();
		this.setState({search:""});
}
	render(){
		return(
			<nav className="navbar navbar-expand" >
				<div className="container-fluid">
					<div className="navbar-header">
							<Link to="/" className="navbar-brand"> 	
								<i className="fas fa-sms"></i>
							</Link>
							
					</div>
					{this.props.currentUser.isAuthenticated?(
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
							</li>
							
							<li>
							<form className="form-inline my-2 my-lg-0" onSubmit={this.handleSubmit}>
      						<div>
      						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.search} onChange={e=>this.setState({search:e.target.value})}/>
							<SearchField SearchValue={this.state.search}/>		
      						</div>
      						<button className="btn 	 my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
   	 					</form>
   	 					</li>
   	 					<li>
								<a onClick={this.logout}>Log Out</a>
							</li>
						</ul>
						):(
						<ul className="nav navbar-nav navbar-right">
							<li>
								<Link to="/signup">Sign Up</Link>
							</li>
							<li>
								<Link to="/signin">Sign In</Link>
							</li>
						</ul>
						
					)};
				</div>
			</nav>
			)
	}
}
function mapStateToProps(state,ownProps){
	return{
		currentUser:state.currentUser
	};
}
export default withRouter(connect(mapStateToProps,{logout})(Navbar));