import React, { useState, useReducer } from "react";
import ListContext from "./ListContext";

const defaultContextValue = {
  tasks: [],
  searchTerm: "",
};
const contextReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      tasks: [...state.tasks, action.taskData],
      searchTerm: state.searchTerm,
    };
  } else if (action.type === "REMOVE") {
    const updatedTasks = state.tasks.filter(
      (task) => task.id !== action.taskId
    );

    return { tasks: updatedTasks, searchTerm: state.searchTerm };
  } else if (action.type === "EDIT") {
    const found = state.tasks.findIndex((task) => {
      return task.id === action.taskData.id;
    });

    const updatedTasks = [...state.tasks];
    updatedTasks[found] = action.taskData;
    return {
      tasks: updatedTasks,
      searchTerm: state.searchTerm,
    };
  } else if (action.type === "SEARCH") {
    console.log(action.searchTerm);
    return { tasks: state.tasks, searchTerm: action.searchTerm };
  }
  return defaultContextValue;
};
const ListProvider = (props) => {
  const [globalContext, globalContextDispatch] = useReducer(
    contextReducer,
    defaultContextValue
  );

  const addTaskHandler = (taskData) => {
    globalContextDispatch({ type: "ADD", taskData: taskData });
  };
  const deleteTaskHandler = (taskId) => {
    globalContextDispatch({ type: "REMOVE", taskId: taskId });
  };

  const editTaskHandler = (taskData) => {
    globalContextDispatch({ type: "EDIT", taskData: taskData });
  };

  const searchTermHandler = (searchTerm) => {
    globalContextDispatch({ type: "SEARCH", searchTerm: searchTerm });
  };
 
  const appContext = {
    tasks: globalContext.tasks,
    addTask: addTaskHandler,
    deleteTasks: deleteTaskHandler,
    editTask: editTaskHandler,
    searchTerm: globalContext.searchTerm,
    search: searchTermHandler,
  };

  return (
    <ListContext.Provider value={appContext}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListProvider;
