import React, { Fragment, useState, useContext, useEffect } from "react";
import classes from "./TasksList.css";
import ListContext from "../components/Context/ListContext";
import AddNewTask from "./AddNewTask";
import Card from "./Card";

const TasksList = (props) => {
  const contextData = useContext(ListContext);
  const [showAddedTask, setShowAddedTask] = useState(false);
  const [selectedTask, setSelectedTask] = useState();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    setTasks(
      contextData.tasks.filter((task) => {
        if (contextData.searchTerm) {
          console.log(" if ", contextData.searchTerm, task);
          return (
            task.status === props.status &&
            Object.values(task)
              .join("")
              .toLowerCase()
              .includes(contextData.searchTerm.toLowerCase())
          );
        } else {
          console.log("else ", contextData.searchTerm, task);
          return task.status === props.status;
        }
      })
    );
  }, [contextData.searchTerm, contextData.tasks, props.status]);

  return (
    <Fragment>
      <div className="container-left">
        <div className="app-wrapper-left ">
          <div className="header-left">
            <h1>{props.title}</h1>
            <div className={classes.users}>
              {tasks.map((task) => (
                <Card>
                  <div key={task.id}>
                    <h4>{task.title}</h4> <p>{task.description}</p>
                    <button
                      onClick={() => {
                        //
                        //contextData.editTask(task);
                        setSelectedTask(task);
                        setShowAddedTask(true);
                      }}
                    >
                      edit
                    </button>
                    <button onClick={() => contextData.deleteTasks(task.id)}>
                      delete
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
      {showAddedTask && (
        <AddNewTask
          selectedTask={selectedTask}
          handleClose={() => setShowAddedTask(false)}
        />
      )}
    </Fragment>
  );
};

export default TasksList;
