import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
	const { username } = useContext(AppContext);
	return (
		<div>
			<h2>Welcome to the Home Page {username} </h2>
		</div>
	);
};
