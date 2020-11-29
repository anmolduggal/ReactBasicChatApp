import React from "react";
const UserAside=({profileImageUrl,username})=>(
	<div className="col-sm-2">
			<div className="UserAside">
					<center>
							<img src={require("../images/avenger.jpg")} alt={username} className="img-thumbnail" width="100%" height="100%" />
					</center>
			</div>
	</div>
);
export default UserAside;