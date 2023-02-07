import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div>
			<h2>Links</h2>
			<br />
			<ul>
				<li>
					<Link to={"/"}>Home</Link>
				</li>
				<li>
					<Link to={"/profile"}>Profile</Link>
				</li>
				<li>
					<Link to={"/contact"}>Contact</Link>
				</li>
			</ul>
		</div>
	);
};
