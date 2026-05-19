"use client";

import { useState } from "react";
import "./main_container.css";
import TaskContainer from "../task_container/task_container.js";
import TaskInput from "../task_input/task_input";
import { FaPlus } from "react-icons/fa";

export default function MainContainer() {
	const [newTaskText, setNewTaskText] = useState("");

	const [taskList, setTaskList] = useState([]);

	const handleAddClick = () => {
		setTaskList([
			...taskList,
			{
				id: Date.now(),
				description: newTaskText,
			},
		]);
		setNewTaskText("");
	};

	const handleDeleteTask = (id) => {
		const updatedList = taskList.filter((task) => task.id !== id);
		setTaskList(updatedList);
	};

	return (
		<div className="main-container">
			<h1> Task Manager </h1>
			<div className="task-control">
				<TaskInput
					value={newTaskText}
					onChange={(e) => setNewTaskText(e.target.value)}
					placeholder={"Enter a new task..."}
				></TaskInput>
				<button onClick={handleAddClick}>
					<FaPlus />
					Add
				</button>
			</div>
			<TaskContainer
				taskList={taskList}
				onDelete={handleDeleteTask}
			></TaskContainer>
			{/* TODO: add the count of total tasks | completed tasks | pending tasks */}
		</div>
	);
}
