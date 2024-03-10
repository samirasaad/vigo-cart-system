import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTodo,
  duplicateTodo,
  editTodo,
} from "./store/featuresReducers/todo";
// import { deleteTodo } from '../actions';

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleDuplicate = (id) => {
    dispatch(duplicateTodo(id));
  };

  console.log(tasks);
  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks?.map((task, index) => (
            <li className="task" key={task.id}>
              {task.text}
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                Delete
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDuplicate(task.id)}
              >
                Duplicate
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
