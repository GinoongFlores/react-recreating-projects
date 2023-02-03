export const Task = (props) => {
	return (
		<div className="todoList--task">
			<div
				style={{
					backgroundColor: props.complete ? "green" : "transparent",
				}}
			>
				<h3 className="taskName">{`${props.id}: ${props.taskName}`}</h3>
			</div>
			<button onClick={() => props.completeTaskBtn(props.id)}>Completed</button>
			<button onClick={() => props.deleteTaskBtn(props.id)}>X</button>
		</div>
	);
};
