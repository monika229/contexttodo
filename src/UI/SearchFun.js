import React, { useRef} from "react";
//import "./SearchFun.css";
const SearchFun = (props) => {
 const inputtask= useRef("");

  
  const getSearchTerm = (event) =>{
    event.preventDefault();
    props.searchKeyWord(inputtask.current.value);
  };
  return (
    <form className="d-flex" role="search" onSubmit={getSearchTerm}>
      <input
      ref={inputtask}
        className="form-control me-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={props.term}
        onChange={getSearchTerm}
      
      />
      
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchFun;
