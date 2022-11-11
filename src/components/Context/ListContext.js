import React, { useState, useEffect } from "react";

const ListContext = React.createContext({
    //default value
   tasks: [],
   addTask: ()=>{} ,
   deleteTasks: ()=> {}
});

export default ListContext;
