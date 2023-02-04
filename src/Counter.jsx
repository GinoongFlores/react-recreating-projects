export const Counter = (props) => {
	return (
		<>
			<h2>{props.count}</h2>
			<div className="buttons">
				<button onClick={props.incrementBtn}>INCREMENT</button>
				<button onClick={props.decrementBtn}>DECREMENT</button>
				<button onClick={props.saveBtn}>SAVE</button>
				<button onClick={props.resetBtn}>RESET</button>
				<button onClick={props.addBtn}>ADD</button>
			</div>

			<h3>Previous entries: {props.counter}</h3>
			<h3>Sum: {props.addAll}</h3>
		</>
	);
};
