import React from "react";
import UserAside from "./UserAside";
import SearchList from "../containers/SearchList";
import AllUsers from "./AllUsers";
const SearchField=(props)=>{
	if(props.SearchValue.length>0){
		return(
			<div className="searching shadow-lg rounded-lg">
				<SearchList SearchValue={props.SearchValue}/>
			</div>
			);
		}
	else{
		return(<div className="notSearching"></div>);
	}
}
export default SearchField;