import "./main_container.css";
import TaskContainer from "../task_container/task_container.js";
import TaskInput from "../task_input/task_input";
import { FaPlus } from "react-icons/fa";

export default function MainContainer() {
  return (
    <div className="main-container">
      <h1> Task Manager </h1>
      <div className="task-control">
        <TaskInput></TaskInput>
        <button>
          <FaPlus />
          Add
        </button>
      </div>
      <TaskContainer></TaskContainer>
    </div>
  );
}
