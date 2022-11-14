import React, { useRef, useContext} from "react";
import ListContext from "../components/Context/ListContext";
import "./SearchFun.css";
const SearchFun = (props) => {
  const globalContext= useContext(ListContext)
 const inputtask= useRef("");

  
  const getSearchTerm = (event) =>{
    event.preventDefault();
    globalContext.search(inputtask.current.value);
  
  };
  return (
    <div class="container">

   
    <form className="d-flex" role="search" onSubmit={getSearchTerm}>
      <input
      ref={inputtask}
        // className="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        //value={globalContext.searchTerm}
        
      
      />
      {/* className="btn btn-outline-success" */}
      <button  type="submit">
        Search
      </button>
    </form>
    </div>
  );
};

export default SearchFun;
