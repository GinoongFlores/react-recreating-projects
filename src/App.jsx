import { useState } from "react";
import "./App.css";

import { Task } from "./Task";

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
			complete: false,
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
					return { ...task, complete: true };
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
						<Task
							id={task.id}
							taskName={task.taskName}
							complete={task.complete}
							completeTaskBtn={completeTask}
							deleteTaskBtn={deleteTask}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
