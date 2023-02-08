import { useState } from "react";

export const useCounterCalculation = () => {
	const [count, setCount] = useState(0);
	const [counter, setCounter] = useState("");
	const [addAll, setAddAll] = useState([]);
	const [addOnce, setAddOnce] = useState(false);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
		count === 0 && setCount(0);
	};

	const save = () => {
		count !== 0 && setCounter(counter + count + "-");
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
		setCounter("");
		setAddAll([]);
		setAddOnce(false);
	};

	return { increment, decrement, save, reset, add, count, counter, addAll };
};
