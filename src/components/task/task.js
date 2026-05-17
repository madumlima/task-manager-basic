import "./task.css";
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";

export default function Task() {
  return (
    <div className="task">
      <div className="task-wrapper">
        <input type="checkbox" className="checkbox"></input>
        {/* This p will be replaced by an input when the edit-button is clicked */}
        <p>
          {" "}
          Task Name big name to test how long this goes more tests more tests
          more{" "}
        </p>
      </div>
      <div className="task-wrapper">
        <button className="edit-button">
          <FaPencilAlt />
        </button>
        <button className="delete-button">
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
}
