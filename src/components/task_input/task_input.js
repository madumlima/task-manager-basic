import { useState } from "react";
import "./task_input.css";

const charLimit = 100;

const errorSound = new Audio("/Windows Default Beep.wav");

export default function TaskInput({ value, onChange, placeholder, onKeyDown }) {
	const [showWarning, setShowWarning] = useState(false);

	const handleInternalKeyDown = (e) => {
		if (
			e.key !== "Backspace" &&
			e.key !== "Delete" &&
			e.key !== "Enter" &&
			value.length === charLimit
		) {
			setShowWarning(true);
			errorSound.currentTime = 0;
			errorSound
				.play()
				.catch((e) => console.log("The browser has blocked the sound: ", e));
		}
		onKeyDown(e);
	};

	const handleInternalChange = (e) => {
		setShowWarning(false);
		onChange(e);
	};

	return (
		<div className="input-container">
			<input
				type="text"
				className={
					showWarning === true && value.length === charLimit
						? "task-input char-limit-reached"
						: "task-input"
				}
				maxLength={charLimit}
				value={value}
				onChange={handleInternalChange}
				placeholder={placeholder}
				onKeyDown={handleInternalKeyDown}
			/>
			<span className="char-counter">
				{value.length}/{charLimit}
			</span>
		</div>
	);
}
