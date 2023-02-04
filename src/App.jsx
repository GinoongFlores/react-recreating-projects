import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [counter, setCounter] = useState("");

	// the addAll array will store all the previous entries and adds them up
	const [addAll, setAddAll] = useState([]);

	// addOnc boolean will prevent the add button from adding the same entry twice
	const [addOnce, setAddOnce] = useState(false);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div className="App">
			<h1>Count me in: </h1>
			<h2>{count}</h2>
			<button>INCREMENT</button>
			<button>DECREMENT</button>
		</div>
	);
}

export default App;
