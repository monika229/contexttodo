import React, {  Fragment, useContext, useReducer, useState } from "react";
import ListContext from "../components/Context/ListContext";

//import select from "react-select";
import ListProvider from "../components/Context/ListProvider";
import './AddNewTask.css';

const AddNewTask = (props) => {
  const addItems= useContext(ListContext)
 
  const [enteredTitle, setenteredTitle] = useState(props.title || "");
  const [enteredDescription, setenteredDescription] = useState(props.description || "");
  const [enteredStatus, setenteredStatus] = useState(props.status || "todo");

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
    id: Math.random().toString()
}

    addItems.addTask(taskData);
    
    //console.log(enteredTitle, enteredDescription);
    console.log(enteredStatus);
    setenteredTitle("");
    setenteredDescription("");
    //props.handleClose()
  };

  return (

    <Fragment>
      <div className="backdrop">
        <div className="popup-box">
          <div className=".box">
            <form onSubmit={submitHandler}>
              <div>
                <label htmlFor="title">Task </label>
                <input
                  id="title"
                  type="text"
                  
                  placeholder="Task Name"
                value={enteredTitle}
                 onChange={titleHandler}
                />
              </div>

              <div>
              
                <label htmlFor="description">Description </label>
                <textarea  cols="30" rows="5"
                // > </textarea>
                // {/* <input */}
                  id="description"
                  //type="text"
                  placeholder="Task Description"
                value={enteredDescription}
                onChange={descriptionChangeHandler}
                  //style={{height:"100px"}}
                />
                
            </div>

              <div>
                <select 
                  onChange={
                    statusChangeHandler}
                  value={enteredStatus}                  
                >
                  <option value="todo" > ToDoList </option>
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
