import { useContext } from "react";
import { useState } from "react";

import { AppContext } from "../App";

export const ChangeProfile = () => {
	const [newUsername, setNewUsername] = useState("");
	const { setUsername } = useContext(AppContext);

	return (
		<div>
			<input
				type="text"
				placeholder="Enter new username"
				onChange={(event) => setNewUsername(event.target.value)}
			/>

			<button onClick={() => setUsername(newUsername)}>Change username</button>
		</div>
	);
};
