"use client";

import { useState } from "react";
import "./main_container.css";
import TaskContainer from "../task_container/task_container.js";
import TaskInput from "../task_input/task_input";
import { FaPlus } from "react-icons/fa";
import TaskCount from "../task_count/task_count";

export default function MainContainer() {
	const [newTaskText, setNewTaskText] = useState("");

	const [taskList, setTaskList] = useState([]);

	const handleAddClick = () => {
		setTaskList([
			...taskList,
			{
				id: Date.now(),
				description: newTaskText,
				isCompleted: false,
			},
		]);
		setNewTaskText("");
	};

	const handleToggleTaskCompleted = (id) => {
		const updatedList = taskList.map((task) =>
			task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
		);
		setTaskList(updatedList);
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
				handleToggleTaskCompleted={handleToggleTaskCompleted}
				onDelete={handleDeleteTask}
			></TaskContainer>
			<TaskCount
				totalTaskCount={taskList.length}
				completedTaskCount={
					taskList.filter((task) => task.isCompleted === true).length
				}
				pendingTaskCount={
					taskList.filter((task) => task.isCompleted === false).length
				}
			></TaskCount>
		</div>
	);
}
