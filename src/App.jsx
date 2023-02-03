import { useState } from "react";
import "./App.css";

function App() {
	const [todoList, setTodoList] = useState([]);
	const [newTask, setNewTask] = useState("");

	const handleChange = (event) => {
		setNewTask(event.target.value);
	};

	const addTasks = () => {
		const tasks = {
			id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
			taskName: newTask,
			completed: false,
		};
		setTodoList([...todoList, tasks]);
	};

	const deleteTask = (id) => {
		setTodoList(todoList.filter((task) => task.id !== id));
	};

	const completeTask = (id) => {
		setTodoList(
			todoList.map((task) => {
				if (task.id === id) {
					return { ...task, completed: true };
				} else {
					return task;
				}
			})
		);
	};

	return (
		<div className="App">
			<div className="todoList">
				<div className="addTask">
					<input type="text" onChange={handleChange} />
					<button onClick={addTasks}>Add a task</button>
				</div>

				<h2 className="tasks">Added tasks</h2>
				{todoList.map((task) => {
					return (
						<div className="todoList--task">
							<div
								style={{
									backgroundColor: task.completed ? "green" : "transparent",
								}}
							>
								<h3 className="taskName">{`${task.id}: ${task.taskName}`}</h3>
							</div>
							<button onClick={() => completeTask(task.id)}>Completed</button>
							<button onClick={() => deleteTask(task.id)}>X</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
