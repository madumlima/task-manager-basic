import Task from "../task/task";
import "./task_container.css";

export default function TaskContainer({ taskList }) {
  return (
    <div className="task-container">
      {taskList.length === 0 ? (
        <div className="no-tasks">No tasks added</div>
      ) : (
        <div className="task-list">
          {taskList.map((task) => (
            <Task key={task.id} description={task.description}></Task>
          ))}
        </div>
      )}
    </div>
  );
}
