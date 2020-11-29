import React from "react";
import {Link} from "react-router-dom";

const Friend=({username})=>(	
		<div className="User-List">
				<div className="row">
				<div className="col-sm-3">
      				<img src={require("../images/avenger.jpg")} className="profileimg" alt="Image"/>
    				</div>
			   <div className="col-sm-9">
    			<Link to={'/profile/'+username}>@{username}&nbsp;</Link>
    		</div>
    		</div>
		</div>
);
export default Friend;