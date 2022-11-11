import React, { Fragment, useState, useContext } from "react";
import classes from "./TasksList.css";
import ListContext from "../components/Context/ListContext";

const TasksList = (props) => {
  const contextData = useContext(ListContext);

const todoTask= contextData.tasks.filter((task)=>{
  return  task.status===props.status;
})

  return (
    <Fragment>
      <div className="container-left">
        <div className="app-wrapper-left ">
          <div className="header-left">
            <h1>{props.title}</h1>
            <div className={classes.users}>
              {todoTask.map((task) => (
                <div>
                  <div key={task.id}>
                    <h4>{task.title}</h4> <p>{task.description}</p>
                    {/* <button onClick={()=>toDolistData.editButtonHandler(task.id)}>
             edit
           </button> */}
                    <button onClick={() => contextData.deleteTasks(task.id)}>
                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TasksList;
