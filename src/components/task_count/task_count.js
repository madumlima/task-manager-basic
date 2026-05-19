import "./task_count.css";

export default function TaskCount({ totalTaskCount }) {
	return (
		<div className="task-count-container">
			<p className="task-count-stat">
				Total: {totalTaskCount}{" "}
				{totalTaskCount === 1 ? <span>task</span> : <span>tasks</span>} |
			</p>
			<p className="task-count-stat">Completed: 0 |</p>
			<p className="task-count-stat">Pending: 1</p>
		</div>
	);
}
