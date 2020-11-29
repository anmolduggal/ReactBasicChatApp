import React from "react";
import Moment from "react-moment";
import {Link} from "react-router-dom";
 const SearchItem = ({profileImageUrl,username})=>(
 		<tr>
 			<td><Link to={"/profile/"+username}>@{username}<i className="fas fa-user-plus float-right m-1"></i></Link></td>
		</tr>
 	);
 export default SearchItem;