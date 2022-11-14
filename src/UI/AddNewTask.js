import React, { Fragment, useContext, useState } from "react";
import ListContext from "../components/Context/ListContext";

//import select from "react-select";

import "./AddNewTask.css";

const AddNewTask = (props) => {
  const addItems = useContext(ListContext);

  const [enteredTitle, setenteredTitle] = useState(
    (props.selectedTask && props.selectedTask.title) || ""
  );
  const [enteredDescription, setenteredDescription] = useState(
    (props.selectedTask && props.selectedTask.description) || ""
  );
  const [enteredStatus, setenteredStatus] = useState(
    (props.selectedTask && props.selectedTask.status) || "todo"
  );

  const titleHandler = (event) => {
    setenteredTitle(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setenteredDescription(event.target.value);
  };

  const statusChangeHandler = (event) => {
    console.log(event);
    setenteredStatus(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    //props.addTaskHandler(enteredTitle, enteredDescription,enteredStatus);
    const taskData = {
      title: enteredTitle,
      description: enteredDescription,
      status: enteredStatus,
      id: props.selectedTask ? props.selectedTask.id : Math.random().toString(),
    };
    if (props.selectedTask) {
      addItems.editTask(taskData);
    } else {
      addItems.addTask(taskData);
    }
    setenteredTitle("");
    setenteredDescription("");
    props.handleClose();
  };

  return (
    <Fragment>
      <div className="backdrop">
        <div className="popup-box">
          <div className=".box">
            <form onSubmit={submitHandler}>
              <div className="title-des">
                <label htmlFor="title">Task </label>
                <input
                  id="title"
                  type="text"
                  required
                  placeholder="Task Name"
                  value={enteredTitle}
                  onChange={titleHandler}
                />  
              </div>

              <div className="description-des">
                <label htmlFor="description">Description </label>
                <textarea
                  cols="30"
                  rows="5"
                  id="description"
                  required
                  placeholder="Task Description"
                  value={enteredDescription}
                  onChange={descriptionChangeHandler}
                />
              </div>

              <div className="dropdpwn-btn">
                <select onChange={statusChangeHandler} value={enteredStatus}>
                  <option value="todo"> ToDoList </option>
                  <option value="done"> DoneList </option>
                </select>
              </div>

              <footer>
                <button type="submit" value="Submit">
                  {"Submit"}
                </button>
              </footer>

              {/* <button >Button <i className="fa fa-pencil"></i></button> */}
            </form>
            <button className="btn-close" onClick={props.handleClose}>
              x
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddNewTask;
