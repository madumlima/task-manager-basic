import "./task_input.css";

export default function TaskInput() {
  return (
    <>
      <input
        type="text"
        placeholder="Enter a new task..."
        className="task-input"
      />
      {/* This placeholder needs to be dynamic. When used to enter a new task, then show the placeholder. When used to edit an existing task, it should show the current text */}
    </>
  );
}
