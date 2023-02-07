import "../App.css";
import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {
	const { username } = useContext(AppContext);

	const {
		data: DogImage,
		isLoading,
		isError,
		refetch,
	} = useQuery(["dogs"], () => {
		return Axios.get("https://dog.ceo/api/breeds/image/random").then(
			(res) => res.data
		);
	});

	if (isLoading) {
		return <h2>A doggo is loading...</h2>;
	}

	if (isError) {
		return <h2>A doggo was not found..</h2>;
	}

	return (
		<div>
			<h2>Welcome to the Home Page {username} </h2>
			<p>Here's a random picture of a doggo</p>
			<img src={DogImage?.message} alt="dog" width="450px" />

			<br />
			<button onClick={refetch}>Give me another doggo</button>
		</div>
	);
};
