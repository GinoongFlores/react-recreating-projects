import "./App.css";
import { Counter } from "./Counter";
import { useCounterCalculation } from "./hooks/useCounterCalculation";

function App() {
	const { increment, decrement, save, reset, add, count, counter, addAll } =
		useCounterCalculation();
	return (
		<div className="App">
			<h1>Count me in: </h1>
			<Counter
				count={count}
				counter={counter}
				addAll={addAll}
				incrementBtn={increment}
				decrementBtn={decrement}
				saveBtn={save}
				resetBtn={reset}
				addBtn={add}
			/>
		</div>
	);
}

export default App;
