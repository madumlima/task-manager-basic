import "./task_input.css";

export default function TaskInput({ value, onChange, placeholder }) {
	return (
		<>
			<input
				type="text"
				className="task-input"
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
		</>
	);
}
