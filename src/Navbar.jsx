import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<h2>Links</h2>
			<br />
			<Link to={"/"}>Home</Link>
			<Link to={"/profile"}>Profile</Link>
			<Link to={"/contact"}>Contact</Link>
		</div>
	);
};
