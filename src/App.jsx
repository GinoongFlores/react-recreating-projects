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
		count === 0 && setCount(0); // simplified version using ternary operator
	};

	const save = () => {
		count !== 0 && setCounter(counter + count + "-");
		// if (count !== 0) {
		// 	const updatedCounter = counter.endsWith("-")
		// 		? counter + count
		// 		: counter + count + "-";
		// 	setCounter(updatedCounter);
		// }
	};

	const add = () => {
		if (!addOnce && count !== 0 && counter.split("-").length > 1) {
			setAddAll([
				...addAll,
				counter
					.split("-")
					.map(Number)
					.reduce((accumulator, currentValue) => accumulator + currentValue),
			]);

			setAddOnce(true);
		}
	};

	const reset = () => {
		setCount(0);
		setCounter(0);
		setAddAll([]);
		setAddOnce(false);
	};

	return (
		<div className="App">
			<h1>Count me in: </h1>
			<h2>{count}</h2>
			<div className="buttons">
				<button onClick={increment}>INCREMENT</button>
				<button onClick={decrement}>DECREMENT</button>
				<button onClick={save}>SAVE</button>
				<button onClick={reset}>RESET</button>
				<button onClick={add}>ADD</button>
			</div>

			<h3>Previous entries: {counter}</h3>
			<h3>Sum: {addAll}</h3>
		</div>
	);
}

export default App;
