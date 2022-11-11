import React, {useState, useReducer} from "react";
import ListContext from "./ListContext";


const defaultContextValue = {
    tasks: [],
}
const contextReducer=(state, action)=>{
    console.log("state",state, action);
     if (action.type === 'ADD') {
        return {
            tasks: [...state.tasks, action.taskData]
            };
     }
     else if (action.type === 'REMOVE') {
       const updatedTasks= state.tasks.filter((task)=>task.id!==(action.taskId));
      
     return {tasks: updatedTasks}
   
    } 
     return defaultContextValue;
}
const ListProvider =(props) => {
    const [globalContext, globalContextDispatch] = useReducer(contextReducer, defaultContextValue);

     const addTaskHandler= (taskData) => {
        console.log("fdvcxjsdif", taskData);
        globalContextDispatch({ type: 'ADD', taskData:taskData});
     }
      const deleteTaskHandler= (taskId) => {
        globalContextDispatch({type:'REMOVE', taskId:taskId})
      }
    
    const appContext = {
        tasks: globalContext.tasks,
        addTask: addTaskHandler,
        deleteTasks: deleteTaskHandler,
        
    }
    
    
    return(
        <ListContext.Provider value={appContext} >
            {props.children}
        </ListContext.Provider>
    )
};


export default ListProvider;