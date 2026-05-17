import Task from "../task/task";
import "./task_container.css";

export default function TaskContainer() {
  return (
    <div className="task-container">
      <div className="no-tasks">No tasks added</div>
      <div className="task-list">
        <Task></Task>
      </div>
    </div>
  );
}
