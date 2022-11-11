import React, { Fragment, useState } from "react";
import ListProvider from "./components/Context/ListProvider";
import SearchFun from "./UI/SearchFun";
import AddNewTask from "./UI/AddNewTask";
import "./App.css";
import TasksList from "./UI/TasksList";

function App() {
  const [newTask, setNewTask] = useState(false);


  const addTaskButtonHandler = () => {
    setNewTask(!newTask);
  };
  return (
    <ListProvider>
      <Fragment>
        <SearchFun />

        <button className="btn btn" onClick={addTaskButtonHandler}>
          Add Task
        </button>

        {newTask && (
          <AddNewTask
            
            handleClose={addTaskButtonHandler}
          />
        )}
        <div className="show">
          <TasksList status="todo" 
          title="To Do List"/>

          <TasksList status="done" 
          title="Done List"/>
        </div>
      
      </Fragment>
    </ListProvider>
  );
}

export default App;
