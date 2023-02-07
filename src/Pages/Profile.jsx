import { ChangeProfile } from "../components/ChangeProfile";

import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
	const { username } = useContext(AppContext);
	return (
		<div>
			<h2>Welcome to the Profile Page {username}</h2>
			<h3>Change Profile</h3>

			<ChangeProfile />
		</div>
	);
};
